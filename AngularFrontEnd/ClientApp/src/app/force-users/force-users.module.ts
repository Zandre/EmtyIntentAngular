import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatTableModule } from '@angular/material/table';

import { routing } from './force-users.routing';
import { ForceUsersComponent } from './force-users.component';


@NgModule({
  imports: [
    CommonModule,

    routing,

    FlexLayoutModule,

    MatTableModule
  ],
  declarations: [ForceUsersComponent]
})
export class ForceUsersModule { }
