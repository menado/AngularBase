import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../services/auth.guard';
import { DashboardComponent } from './dashboard.component';

export const appDashboard: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      /*{
        path: '',
        component: ReportComponent,
      },*/
    ]
  }
];

export const DASHBOARD_ROUTES = RouterModule.forChild( appDashboard );
