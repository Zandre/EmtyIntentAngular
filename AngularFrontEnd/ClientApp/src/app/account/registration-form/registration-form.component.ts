import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';

import { AccountsProxyService } from 'src/@generated/service-proxies/accounts-proxy.service';
import { RegistrationModel } from './models/registration.model';
import { ToastrService } from 'ngx-toastr';

import { faUserPlus, faCircleNotch, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationFormGroup: IFormGroup<RegistrationModel>;
  errors: string;
  isRequesting: boolean;
  submitted = false;

  faUserPlus = faUserPlus;
  faCircleNotch = faCircleNotch;
  faExclamationTriangle = faExclamationTriangle;

  constructor(private router: Router,
    private accountService: AccountsProxyService,
    private readonly _rxFormBuilder: RxFormBuilder,
    private readonly toastService: ToastrService) { }

  ngOnInit() {
    this.registrationFormGroup = this._rxFormBuilder.formGroup(RegistrationModel) as IFormGroup<RegistrationModel>;
    const model = RegistrationModel.createEmpty();
    this.registrationFormGroup.patchModelValue(model);
  }

  registerUser() {

    if (this.registrationFormGroup.invalid) {
      return;
    }

    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';

    this.accountService.createAccount(this.registrationFormGroup.modelInstance.firstName,
      this.registrationFormGroup.modelInstance.lastName,
      this.registrationFormGroup.modelInstance.email,
      this.registrationFormGroup.modelInstance.password)
    .subscribe(() => {
      this.toastService.success(this.registrationFormGroup.modelInstance.email, 'Succesfull registration');
      this.isRequesting = false;
      this.router.navigate(['/login'], {queryParams: {brandNew: true, email: this.registrationFormGroup.modelInstance.email}});
    }, errors => {
      this.toastService.warning(this.registrationFormGroup.modelInstance.email, 'Registration failed');
      this.errors = errors;
      this.isRequesting = false;
    });
 }
}
