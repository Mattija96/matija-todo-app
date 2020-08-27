import {Injectable} from '@angular/core';
import {Weather} from '../../models/weather.model';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}
  getCurrentLocation(city: string, unit: string): Observable<any> {
    const parameters = {
      q: city,
      units: unit,
      appid: '41ce5d5fdec969a29d72352103ee7db0'
    };
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.openweathermap.org/data/2.5/weather', {params: parameters});
  }
}
