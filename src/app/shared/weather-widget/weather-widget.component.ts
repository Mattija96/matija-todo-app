import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {Weather} from '../../models/weather.model';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  location: Weather;
  isLoading: boolean;

  constructor(private wsService: WeatherService) { }

  ngOnInit(): void {
    this.loadWeather();
  }

  loadWeather(): void {
    this.isLoading = true;
    this.wsService.getCurrentLocation('Podgorica', 'metric').subscribe(
      response => {
        this.location = new Weather(response.name, response.sys.country, response.main, response.weather[0]);
        console.log(this.location);
        this.isLoading = false;
      }
    );
  }

}
