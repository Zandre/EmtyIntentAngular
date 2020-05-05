import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing.module';

import { ForceUsersModule } from './force-users/force-users.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { Layout1Component } from './layout/layouts/layout-1/layout.component';
import { Layout2Component } from './layout/layouts/layout-2/layout.component';
import { SearchComponent } from './layout/header/search/search.component';
import { LogoComponent } from './layout/header/logo/logo.component';
import { UserComponent } from './layout/sidebar/user/user.component';
import { PageLoaderComponent } from './layout/page-loader/page-loader.component';
import { NavigationTriggerComponent } from './layout/header/navigation-trigger/navigation-trigger.component';
import { AuthGuard } from './auth.guard';

@NgModule({
   declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    Layout1Component,
    Layout2Component,
    SearchComponent,
    LogoComponent,
    NavigationTriggerComponent,
    UserComponent,
    PageLoaderComponent
   ],
   imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgScrollbarModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    ForceUsersModule,
    HttpClientModule,
    FontAwesomeModule,

    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      preventDuplicates: true,
    })
   ],
   providers: [
    AppService,
    AuthGuard
   ],
   bootstrap: [
    AppComponent
   ]
})
export class AppModule { }
