import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { TruncatePipe } from '../../pipes/truncate.pipe';

import { LayoutModule } from './layout/layout.module';
import { ModalModule } from './modal/modal.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { AuthorizedComponent } from './authorized/authorized.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    TruncatePipe,
    NotFoundComponent,
    ErrorComponent,
    AuthorizedComponent],
  exports: [
    RouterModule,
    NotFoundComponent,
    ErrorComponent,
    AuthorizedComponent,
    LayoutModule,
    ModalModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    ModalModule
  ],
  providers: [
    /*{ provide: NZ_I18N, useValue: en_US },*/
  ],
})
export class SharedModule { }
