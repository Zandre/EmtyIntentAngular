import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { BaseService } from 'src/app/shared/services/base.service';
import { HomeDetails } from '../models/home.details.interface';
import { TestServiceProxyService } from 'src/@generated/service-proxies/test-service-proxy.service';
import { TestDTO } from 'src/@generated/dtos/test-dto';


@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  baseUrl = '';

constructor(private testService: TestServiceProxyService) {
    super();
  }


  getHomeDetails(): TestDTO[] {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    let sithLords: TestDTO[] = [];
    this.testService.getTestDataUnauthorized().subscribe((sith: TestDTO[]) => {
      sith.forEach(sl => sithLords.push(sl));
    });

    return sithLords;
}
}
