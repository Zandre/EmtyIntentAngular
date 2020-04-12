import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountComponent } from './account.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { routing } from './account.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SharedModule } from '../shared/modules/shared.module';
import { EmailValidator } from '../directives/email.validator.directive';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AccountComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    EmailValidator
  ]
})
export class AccountModule { }
