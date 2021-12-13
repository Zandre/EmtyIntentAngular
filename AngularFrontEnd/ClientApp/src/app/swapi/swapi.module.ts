import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { SwapiRoutes } from './swapi.routing';
import { SwapiService } from './swapi-service/swapi.service';
import { PeopleComponent } from './people/people.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SwapiRoutes,
    DataTablesModule.forRoot(),
    MatGoogleMapsAutocompleteModule,
    FormsModule,
  ],
  declarations: [PeopleComponent],
  providers: [
    SwapiService
  ]
})
export class SwapiModule { }
