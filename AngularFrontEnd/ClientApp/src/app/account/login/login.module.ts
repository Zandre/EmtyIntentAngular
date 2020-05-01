import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {InputFloatModule} from '../../directive/input-float/input-float.module';

import {LoginComponent} from './login.component';
import { AccountService } from 'src/app/shared/services/accounts.service';

const LOGIN_ROUTE = [{path: '', component: LoginComponent}];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        InputFloatModule,
        RouterModule.forChild(LOGIN_ROUTE),

        FormsModule,
        ReactiveFormsModule,
        RxReactiveFormsModule,
    ],
    providers: [
      AccountService
    ]
})
export class LoginModule {
}
