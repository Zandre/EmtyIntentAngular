import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

import {BaseService} from "./base.service";
import { UserLogin } from './account-models/user-login.model';

@Injectable({
  providedIn: 'root'
})

export class AccountService extends BaseService {

  private userLoginSubject = new Subject<UserLogin>();
  private userLogin: UserLogin = UserLogin.createEmpty();

  constructor() {
    super();
    this.userLoginSubject.next(this.userLogin);
  }

  successfullLogin(jwt: string, email: string, name: string) {
    const jwtObj = JSON.parse(jwt);
    localStorage.setItem('auth_token', jwtObj.auth_token);
    this.userLogin = UserLogin.create(name, email, true);
    this.userLoginSubject.next(this.userLogin);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.userLogin = UserLogin.create('', '', false);
    this.userLoginSubject.next(this.userLogin);
  }

  currentUserLogin(): UserLogin {
    return this.userLogin;
  }

  getCurrentUserLogin(): Observable<UserLogin> {
    return this.userLoginSubject.asObservable();
  }
}

