import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { PeopleComponent } from './people.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    BrowserModule,
    DataTablesModule,
    FormsModule,
    MatFormFieldModule,
  ]
})

export class PeopleModule { }
