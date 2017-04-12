import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response } from '@angular/http';
import { ConfigService } from './config.service';

@Injectable()
export class ExtHttp extends Http {

  constructor(private backend: XHRBackend, 
              private defaultOptions: RequestOptions, 
              private configService: ConfigService) { 
      super(backend, defaultOptions)
  }

  getUrl( path: string ): string {
    return this.configService.getApiUrl( path );
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if ( typeof url === "string")
      url = this.getUrl(url);

    return super.request(url, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(this.getUrl(url), options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(this.getUrl(url), body, options);
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(this.getUrl(url), body, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(this.getUrl(url), options);
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.patch(this.getUrl(url), body, options);
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.head(this.getUrl(url), options);
  }
}
