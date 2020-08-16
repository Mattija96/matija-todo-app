import {Injectable} from '@angular/core';
import {Weather} from '../../models/weather.model';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class WeatherService {
  // weather api key: 41ce5d5fdec969a29d72352103ee7db0

  constructor(private http: HttpClient) {}
  getCurrentLocation(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Podgorica,me&units=metric&appid=41ce5d5fdec969a29d72352103ee7db0');
  }
}
