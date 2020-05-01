import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';

import { AccountsProxyService } from 'src/@generated/service-proxies/accounts-proxy.service';
import { AccountService } from 'src/app/shared/services/accounts.service';

import { LoginModel } from './models/login.model';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    loginStats: any = {
        login: true,
        signUp: false,
        forgotPassword: false
    };

    loginFormGroup: IFormGroup<LoginModel>;

    constructor(private router: Router,
      private accountService: AccountService,
      private accountProxyService: AccountsProxyService,
      private readonly _rxFormBuilder: RxFormBuilder,
      private toastService: ToastrService) {
    }

    ngOnInit() {
      this.loginFormGroup = this._rxFormBuilder.formGroup(LoginModel) as IFormGroup<LoginModel>;
      const model = LoginModel.createEmpty();
      this.loginFormGroup.patchModelValue(model);
    }

    login(): void {

      if (this.loginFormGroup.invalid) {
        return;
      }

      this.accountProxyService.login(this.loginFormGroup.modelInstance.email, this.loginFormGroup.modelInstance.password)
      .subscribe((jwt: string) => {
        this.toastService.success(this.loginFormGroup.modelInstance.email, 'Succesfull login');
        this.accountService.successfullLogin(jwt);
        this.router.navigate(['/home']);
      }, error => {
        this.toastService.warning(this.loginFormGroup.modelInstance.email, 'Login attempt failed');
      });
    }

    toggleBlock(currentBlock, nextBlock) {
      this.loginStats[currentBlock] = false;
      this.loginStats[nextBlock] = true;
    }

}
