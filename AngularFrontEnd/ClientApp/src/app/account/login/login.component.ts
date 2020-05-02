import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';

import { AccountsProxyService } from 'src/@generated/service-proxies/accounts-proxy.service';
import { AccountService } from 'src/app/shared/services/accounts.service';

import { LoginModel } from './models/login.model';
import { RegistrationModel } from './models/registration.model';
import { UserLoginDto } from 'src/@generated/dtos/user-login-dto';

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
    registrationFormGroup: IFormGroup<RegistrationModel>;

    constructor(private router: Router,
      private accountService: AccountService,
      private accountProxyService: AccountsProxyService,
      private readonly _rxFormBuilder: RxFormBuilder,
      private toastService: ToastrService) {
    }

    ngOnInit() {
      this.loginFormGroup = this._rxFormBuilder.formGroup(LoginModel) as IFormGroup<LoginModel>;
      const loginModel = LoginModel.createEmpty();
      this.loginFormGroup.patchModelValue(loginModel);

      this.registrationFormGroup = this._rxFormBuilder.formGroup(RegistrationModel) as IFormGroup<RegistrationModel>;
      const registrationModel = RegistrationModel.createEmpty();
      this.registrationFormGroup.patchModelValue(registrationModel);
    }

    login(): void {

      if (this.loginFormGroup.invalid) {
        return;
      }

      this.accountProxyService.login(this.loginFormGroup.modelInstance.email, this.loginFormGroup.modelInstance.password)
      .subscribe((userLoginDto: UserLoginDto) => {
        this.toastService.success(this.loginFormGroup.modelInstance.email, 'Succesfull login');
        this.accountService.successfullLogin(userLoginDto.jwt, userLoginDto.email, userLoginDto.name);
        this.router.navigate(['/home']);
      }, error => {
        this.toastService.warning(this.loginFormGroup.modelInstance.email, 'Login attempt failed');
      });
    }

    registerUser() {

      if (this.registrationFormGroup.invalid) {
        return;
      }

      this.accountProxyService.createAccount(this.registrationFormGroup.modelInstance.firstName,
        this.registrationFormGroup.modelInstance.lastName,
        this.registrationFormGroup.modelInstance.email,
        this.registrationFormGroup.modelInstance.password)
      .subscribe(() => {
        this.toastService.success(this.registrationFormGroup.modelInstance.email, 'Succesfull registration');

        const loginModel = LoginModel.create(this.registrationFormGroup.modelInstance.email);
        this.loginFormGroup.patchModelValue(loginModel);
        this.toggleBlock('signUp', 'login');

      }, errors => {
        this.toastService.warning(this.registrationFormGroup.modelInstance.email, 'Registration failed');
      });
   }

    toggleBlock(currentBlock, nextBlock) {
      this.loginStats[currentBlock] = false;
      this.loginStats[nextBlock] = true;
    }

}
