import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
// import { registerLocaleData } from '@angular/common';
// import zh from '@angular/common/locales/zh';


import { AppRoutingModule } from './app.routing';
// import { FrontEndComponent } from './front-end/front-end.component';

import { AdminModule } from './admin/admin.module';
// import { HeaderComponent } from './front-end/header/header.component';
import { FrontEndModule } from './front-end/front-end.module';
import {PageNotFoundComponent} from './PageNotFoundComponent';


// registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
    // FrontEndComponent,
    // HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // NgZorroAntdModule,
    AdminModule,
    FrontEndModule,
    AppRoutingModule,
  ],
  // providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
