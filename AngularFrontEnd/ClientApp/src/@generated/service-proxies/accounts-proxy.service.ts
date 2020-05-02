import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { UserLoginDto } from './../dtos/user-login-dto';

//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/


@Injectable({
    providedIn: 'root'
})
export class AccountsProxyService {
    private readonly apiBasePath: string;

    constructor(
        private readonly http: HttpClient
    ) {
        this.apiBasePath = environment.api_basepath;
    }

    createAccount(firstName: string, lastName: string, email: string, password: string): Observable<void> {
        const url = this.apiBasePath + 'api/accounts/createAccount';
				return this.http.get<void>(url, { params: new HttpParams().set('firstName', firstName).set('lastName', lastName).set('email', email).set('password', password) , headers: new HttpHeaders() });
		    }

    login(userName: string, password: string): Observable<UserLoginDto> {
        const url = this.apiBasePath + 'api/accounts/login';
				return this.http.get<UserLoginDto>(url, { params: new HttpParams().set('userName', userName).set('password', password) , headers: new HttpHeaders() });
		    }
}
