import { Component, OnInit, OnDestroy } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { AccountService } from 'src/app/shared/services/accounts.service';
import { UserLogin } from 'src/app/shared/services/account-models/user-login.model';

@Component({
  selector: 'sidebar-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('toggleUserMenu', [
      state('void', style({
        height: '0',
        opacity: '0'
      })),
      state('true', style({
        height: '*',
        opacity: '1'
      })),
      transition(':enter', animate('200ms ease-in')),
      transition(':leave', animate('200ms ease-out'))
    ])
  ]
})
export class UserComponent implements OnInit, OnDestroy {
  userMenu: boolean = false;
  faUser = faUser;
  faSignInAlt = faSignInAlt;

  userLogin: UserLogin;
  subscription: Subscription;

  constructor(private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {

    // ZB: this seems a bit messy...
    this.userLogin = this.accountService.currentUserLogin();

    this.subscription = this.accountService.getCurrentUserLogin().subscribe((userLogin: UserLogin) => {
      this.userLogin = userLogin;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  login() {
    this.router.navigate(['/account/login']);
  }

  logout() {
    this.accountService.logout();
  }

}
