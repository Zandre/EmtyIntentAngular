import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountModule } from './account/account.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      HeaderComponent
   ],
   imports: [
      AccountModule,
      DashboardModule,
      BrowserModule,
      FormsModule,
      HttpClientModule,
      routing
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
