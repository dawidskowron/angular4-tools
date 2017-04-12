import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { ConfigService, ExtHttp } from './_services';
import { AppComponent } from './app.component';

export function eHttp(backend: XHRBackend, options: RequestOptions, configService: ConfigService) {
  return new ExtHttp(backend, options, configService);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ConfigService,
    {
      provide: ExtHttp,
      useFactory: eHttp,
      deps: [XHRBackend, RequestOptions, ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
