import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistration } from 'src/app/shared/model/user.registration.interface';
import { AccountsProxyService } from 'src/@generated/service-proxies/accounts-proxy.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  errors: string;
  isRequesting: boolean;
  submitted = false;

  constructor(private router: Router,
    private accountService: AccountsProxyService) { }

  ngOnInit() {
  }

  registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.accountService.createAccount(value.firstName, value.lastName, value.email, value.password)
      .subscribe(() => {
        this.isRequesting = false;
        this.router.navigate(['/login'], {queryParams: {brandNew: true, email: value.email}});
      }, errors => this.errors = errors);
    }
 }
}
