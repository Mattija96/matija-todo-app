export class Weather {
    public city: string;
    public country: string;
    public weather: any;
    public weatherState: any;

    constructor(city: string, country: string, weather: any, weatherState: any) {
      this.city = city;
      this.country = country;
      this.weather = weather;
      this.weatherState = weatherState;
    }
}
