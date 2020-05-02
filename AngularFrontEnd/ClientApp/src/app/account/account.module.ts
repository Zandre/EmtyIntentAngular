import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginFormComponent } from './login-form/login-form.component';
import { routing } from './account.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SharedModule } from '../shared/modules/shared.module';
import { EmailValidator } from '../directives/email.validator.directive';
import { AccountService } from '../shared/services/accounts.service';

import { FontAwesomeModule, FaConfig } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,

    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,

    FlexLayoutModule,

    FontAwesomeModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    EmailValidator
  ]
})
export class AccountModule {
  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'far';
    faConfig.fixedWidth = true;
  }
 }
