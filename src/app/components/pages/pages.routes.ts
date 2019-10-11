import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../services/auth.guard';

import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';

export const appPages: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        children: []
      },
      /*{
        path: '',
        /!*component: '',*!/
        canActivate: [AuthGuard],
      },*/
    ]
  },
  /*{
    path: 'ingresar',
    /!*component: SigninComponent,*!/
    /!*canActivate: [LoadGuard],*!/
  },*/
];

export const PAGES_ROUTES = RouterModule.forRoot( appPages, { useHash: true } );
