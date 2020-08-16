import {Component, OnInit} from '@angular/core';
import {WeatherService} from './shared/services/weather.service';
import {Weather} from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private wsService: WeatherService) {}
}
