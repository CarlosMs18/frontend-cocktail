import { NgModule , LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

registerLocaleData(localeES, 'es');
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
