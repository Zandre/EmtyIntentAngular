import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { ForceUser } from './../dtos/force-user';

//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/


@Injectable({
    providedIn: 'root'
})
export class ForceUsersQueryService_TestServiceProxyService {
    private readonly apiBasePath: string;

    constructor(
        private readonly http: HttpClient
    ) {
        this.apiBasePath = environment.api_basepath;
    }

    getForceUsers(): Observable<ForceUser[]> {
        const url = this.apiBasePath + 'api/forceUsersQueryService_TestService/getForceUsers';
				return this.http.get<ForceUser[]>(url, {headers: new HttpHeaders()});
		    }

    causeCSharpError(): Observable<void> {
        const url = this.apiBasePath + 'api/forceUsersQueryService_TestService/causeCSharpError';
        return this.http.post<void>(url, null);
    }
}
