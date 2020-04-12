import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/


@Injectable({
    providedIn: 'root'
})
export class AuthorizationProxyService {
    private readonly apiBasePath: string;

    constructor(
        private readonly http: HttpClient
    ) {
        this.apiBasePath = environment.inoxico_newapplication5_api_basepath;
    }

    login(userName: string, password: string): Observable<string> {
        const url = this.apiBasePath + 'api/authorization/login';
        return this.http.get<string>(url, { params: new HttpParams().set('userName', userName).set('password', password) });
    }
}
