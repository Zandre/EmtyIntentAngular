import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';

import { Subscription } from 'rxjs';

import { AccountService } from 'src/app/shared/services/accounts.service';
import { AccountsProxyService } from 'src/@generated/service-proxies/accounts-proxy.service';
import { LoginModel } from './models/login.model';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSignInAlt, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  faUser = faUser;
  faSignInAlt = faSignInAlt;
  faCircleNotch = faCircleNotch;

  loginFormGroup: IFormGroup<LoginModel>;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private accountProxyService: AccountsProxyService,
    private readonly _rxFormBuilder: RxFormBuilder,
    private readonly toastService: ToastrService) { }

  ngOnInit() {


    this.loginFormGroup = this._rxFormBuilder.formGroup(LoginModel) as IFormGroup<LoginModel>;
    const model = LoginModel.createEmpty();
    this.loginFormGroup.patchModelValue(model);

    //subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {

        this.brandNew = param['brandNew'];

        const model = LoginModel.create(param['email'])
        this.loginFormGroup.patchModelValue(model);
      });
  }

  ngOnDestroy(): void {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login(): void {

    if (this.loginFormGroup.invalid) {
      return;
    }

    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';

    this.accountProxyService.login(this.loginFormGroup.modelInstance.email, this.loginFormGroup.modelInstance.password)
    .subscribe((jwt: string) => {

      this.toastService.success(this.loginFormGroup.modelInstance.email, 'Succesfull login');
      this.accountService.successfullLogin(jwt);
      this.router.navigate(['/force-users']);
      this.isRequesting = false;
    }, error => {
      this.toastService.warning(this.loginFormGroup.modelInstance.email, 'Login attempt failed');
      this.errors = error
      this.isRequesting = false;
    });
  }
}
