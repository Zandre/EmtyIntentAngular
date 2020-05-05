import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { PeopleComponent } from './people.component';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    BrowserModule,
    DataTablesModule
  ]
})

export class PeopleModule { }
