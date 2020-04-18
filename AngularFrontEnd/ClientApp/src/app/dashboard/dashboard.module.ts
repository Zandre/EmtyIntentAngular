import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/modules/shared.module';
import { routing } from './dashboard.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { DashboardService } from './services/dashboard.service';


import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from '../auth.guard';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [
    RootComponent,
    HomeComponent,
    SettingsComponent
  ],
  exports:      [ ],
  providers:    [
    AuthGuard,
    DashboardService
  ]
})
export class DashboardModule { }
