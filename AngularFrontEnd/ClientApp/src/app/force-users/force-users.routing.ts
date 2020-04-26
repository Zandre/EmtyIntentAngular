import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../auth.guard';

import { ForceUsersComponent } from './force-users.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'force-users',
      component: ForceUsersComponent,
      canActivate: [AuthGuard],
      children: []
    }
]);

