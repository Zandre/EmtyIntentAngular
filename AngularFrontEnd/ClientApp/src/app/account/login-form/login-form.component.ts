import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Credentials } from 'src/app/shared/model/credentials.interface';
import { AuthorizationProxyService } from 'src/@generated/service-proxies/authorization-proxy.service';
import { AccountService } from 'src/app/shared/services/accounts.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted = false;
  credentials: Credentials = { email: '', password: '' };

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private authorizeService: AuthorizationProxyService,
    private accountService: AccountService) { }

  ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
         this.brandNew = param['brandNew'];
         this.credentials.email = param['email'];
      });
  }

  ngOnDestroy(): void {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.authorizeService.login(value.email, value.password).subscribe((jwt: string) => {
        this.accountService.successfullLogin(jwt);
        this.router.navigate(['/dashboard/home']);
      }, error => this.errors = error);
    }
  }
}
