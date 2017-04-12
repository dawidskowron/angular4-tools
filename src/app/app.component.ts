import { Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { ConfigService, ExtHttp } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private configService: ConfigService, private extHttp: ExtHttp) {

  }
}
