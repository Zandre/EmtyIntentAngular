import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FontAwesomeModule, FaConfig } from '@fortawesome/angular-fontawesome';

import { routing } from './force-users.routing';
import { ForceUsersComponent } from './force-users.component';
import { ForceUserDialogComponent } from './force-user-dialog/force-user-dialog.component';

@NgModule({
  imports: [
    CommonModule,

    routing,

    FlexLayoutModule,

    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    FontAwesomeModule,

    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  declarations: [ForceUsersComponent, ForceUserDialogComponent]
})
export class ForceUsersModule {
  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'fab';
    faConfig.fixedWidth = true;
  }
 }
