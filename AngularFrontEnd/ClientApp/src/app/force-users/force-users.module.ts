import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

import { FontAwesomeModule, FaConfig } from '@fortawesome/angular-fontawesome';

import { routing } from './force-users.routing';
import { ForceUsersComponent } from './force-users.component';

@NgModule({
  imports: [
    CommonModule,

    routing,

    FlexLayoutModule,

    MatTableModule,

    FontAwesomeModule
  ],
  declarations: [ForceUsersComponent]
})
export class ForceUsersModule {
  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'fab';
    faConfig.fixedWidth = true;
  }
 }
