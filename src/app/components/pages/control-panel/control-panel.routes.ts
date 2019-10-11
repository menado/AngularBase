import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../services/auth.guard';
import { ControlPanelComponent } from './control-panel.component';

export const appPanel: Routes = [
  {
    path: 'panel',
    component: ControlPanelComponent,
    canActivate: [AuthGuard],
    children: [
      /*{
        path: '',
        component: ReportComponent,
      },*/
    ]
  }
];

export const PANEL_ROUTES = RouterModule.forChild( appPanel );
