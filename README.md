# Angular4Tools
My angular4 useful tools
## Environment variables
```javascript
export const environment = {
  production: false,
  api: {
    prefix: 'api',
    version: 'v1',
    url: 'example.com',
    config: {
      ssl: true
    }
  }
};
```
## ConfigService
An injectable config service for getting e.g API URL to HTTP requests.
For variables from above the service returns URL like https://api.example.com/v1/
```javascript
@Injectable()
export class ConfigService {
  public getApiUrl( path: string ): string {
    if ( path.substr(0, 1) == '/' )
      path = path.replace('/', '');

    return this.getApiEndPoint() + '/' + path;
  }
}
```
## ExtHttp service
An injectable service which extends Http and adds API URL to each requests.
```javascript
// app.module.ts
@NgModule({
  ...
  providers: [
    ConfigService,
    {
      provide: ExtHttp,
      useFactory: eHttp,
      deps: [XHRBackend, RequestOptions, ConfigService]
    }
  ],
  ...
})
```
```javascript
// our component class
constructor(private extHttp: ExtHttp) {
  let q = new URLSearchParams();
  q.set('q', 'query');

  this.extHttp.get('search', { search: search }).subscribe((response: Response) => {
    // logic
  });
}
```