import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountModule } from './account/account.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { routing } from './app.routing';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
   declarations: [
    NavMenuComponent,
    AppComponent,
    HomeComponent
   ],
   imports: [
    AccountModule,
    DashboardModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
