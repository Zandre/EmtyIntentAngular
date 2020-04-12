import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistration } from 'src/app/shared/model/user.registration.interface';
import { AccountsProxyService } from 'src/@generated/service-proxies/accounts-proxy.service';
import { CreateAccountDTO } from 'src/@generated/dtos/create-account-dto';



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

      // let createAccountDto: CreateAccountDTO = {
      //   firstName: value.firstName,
      //   lastName: value.lastName,
      //   password: value.password,
      //   email: value.email
      // };

      this.accountService.createAccount(value.firstName).subscribe(() => {
        console.log('New account created');
      });


        // this.userService.register(value.email,value.password,value.firstName,value.lastName,value.location)
        //           .finally(() => this.isRequesting = false)
        //           .subscribe(
        //             result  => {if(result){
        //                 this.router.navigate(['/login'],{queryParams: {brandNew: true,email:value.email}});
        //             }},
        //             errors =>  this.errors = errors);
    }
 }
}
