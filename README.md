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
A injectable config service for get e.g API URL to HTTP requests.
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