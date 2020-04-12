import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

// TODO : ZB
//import { AuthGuard } from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'dashboard',
      // TODO : ZB
      //component: RootComponent, canActivate: [AuthGuard],
      component: RootComponent,

      children: [
       { path: '', component: HomeComponent },
       { path: 'home',  component: HomeComponent },
       { path: 'settings',  component: SettingsComponent },
      ]
    }
]);

