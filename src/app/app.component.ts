import { Component } from '@angular/core';
import { ConfigService } from './_services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private configService: ConfigService) {
    
  }
}
