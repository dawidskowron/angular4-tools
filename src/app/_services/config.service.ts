import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

  public getApiUrl( path: string ): string {
    if ( path.substr(0, 1) == '/' )
      path = path.replace('/', ''); // only one match

    return this.getApiEndPoint() + '/' + path;
  }

  private getApiEndPoint(): string {
    let api = environment.api;
    let config = api.config;

    let protocol: string = config.ssl ? 'https://' : 'http://';
    let prefix: string = ( api.prefix ) ? api.prefix + '.' : '';
    let hostname: string = api.url;
    let version: string = ( api.version ) ? '/' + api.version : '';

    return protocol + prefix + hostname + version;
  }
}
