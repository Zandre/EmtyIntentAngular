import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { CreateForceUser } from './../dtos/create-force-user';
import { UpdateForceUser } from './../dtos/update-force-user';

//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/


@Injectable({
    providedIn: 'root'
})
export class ForceUsers_TestServiceProxyService {
    private readonly apiBasePath: string;

    constructor(
        private readonly http: HttpClient
    ) {
        this.apiBasePath = environment.api_basepath;
    }

    createForceUser(createForceUserDto: CreateForceUser): Observable<string> {
        const url = this.apiBasePath + 'api/forceUsers_TestService/createForceUser';
        return this.http.post<string>(url, createForceUserDto, { headers: new HttpHeaders({ 'Content-Type':  'application/json', 'Authorization': `Bearer ${localStorage.getItem('auth_token')}`})});
    }

    updateForceUser(updateForceUserDto: UpdateForceUser): Observable<void> {
        const url = this.apiBasePath + 'api/forceUsers_TestService/updateForceUser';
        return this.http.post<void>(url, updateForceUserDto, { headers: new HttpHeaders({ 'Content-Type':  'application/json', 'Authorization': `Bearer ${localStorage.getItem('auth_token')}`})});
    }

    deleteForceUser(id: string): Observable<void> {
        const url = this.apiBasePath + 'api/forceUsers_TestService/deleteForceUser';
        return this.http.post<void>(url, id, { headers: new HttpHeaders({ 'Content-Type':  'application/json', 'Authorization': `Bearer ${localStorage.getItem('auth_token')}`})});
    }
}
