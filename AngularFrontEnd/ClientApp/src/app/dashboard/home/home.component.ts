import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../services/dashboard.service';
import { HomeDetails } from '../models/home.details.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeDetails: HomeDetails;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    let homeDetails = this.dashboardService.getHomeDetails();
  }
}
