import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {BaseService} from "./base.service";
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable()

export class AccountService extends BaseService {

  baseUrl: string = '';

  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor() {
    super();

    // ZB: I want the user always to start with being locked out
    //this.loggedIn = !!localStorage.getItem('auth_token');

    this._authNavStatusSource.next(this.loggedIn);
  }

  successfullLogin(jwt: string) {
    const jwtObj: any = jwt;
    localStorage.setItem('auth_token', jwtObj.auth_token);
    this.loggedIn = true;
    this._authNavStatusSource.next(true);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}

