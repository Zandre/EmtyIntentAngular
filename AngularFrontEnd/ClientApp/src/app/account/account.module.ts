import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccountComponent, LoginFormComponent]
})
export class AccountModule { }
