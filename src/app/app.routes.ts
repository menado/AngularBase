import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/shared/not-found/not-found.component';

export const app: Routes = [
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];

export const APP_ROUTES = RouterModule.forChild( app );
