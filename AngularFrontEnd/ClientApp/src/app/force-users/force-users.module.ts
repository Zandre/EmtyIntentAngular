import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './force-users.routing';
import { ForceUsersComponent } from './force-users.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ForceUsersComponent]
})
export class ForceUsersModule { }
