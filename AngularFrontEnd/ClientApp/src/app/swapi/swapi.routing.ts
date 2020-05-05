import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';

const routes: Routes = [
  { path: '', redirectTo: 'people'},
  { path: 'people', component: PeopleComponent },
  { path: 'starships', component: StarshipsComponent },
];

export const SwapiRoutes = RouterModule.forChild(routes);
