import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ControlPanelModule } from './control-panel/control-panel.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    DashboardComponent,
    ControlPanelComponent,
    HomeComponent,
    PagesComponent],
  exports: [
    RouterModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    PAGES_ROUTES,
    ControlPanelModule,
    DashboardModule,
  ],
  providers: [
    /*{ provide: NZ_I18N, useValue: en_US },*/
  ],
})
export class PagesModule { }
