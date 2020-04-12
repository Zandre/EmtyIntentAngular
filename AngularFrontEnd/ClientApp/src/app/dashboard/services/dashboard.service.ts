import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { BaseService } from 'src/app/shared/services/base.service';
import { HomeDetails } from '../models/home.details.interface';


@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  baseUrl = '';

constructor() {
    super();
  }


  getHomeDetails(): HomeDetails {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    let details: HomeDetails = {
      message: '',
      firstName: '',
      lastName: '',
      location: '',
      locale: '',
      gender: '',
      pictureUrl: '',
      facebookId: 0,
    };

    return details;
}
}
