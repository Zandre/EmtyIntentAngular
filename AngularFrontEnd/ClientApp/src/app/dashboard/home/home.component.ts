import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../services/dashboard.service';
import { HomeDetails } from '../models/home.details.interface';
import { TestDTO } from 'src/@generated/dtos/test-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sithLords: TestDTO[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.sithLords = this.dashboardService.getHomeDetails();
  }
}
