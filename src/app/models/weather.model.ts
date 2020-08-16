export class Weather {
    private city: string;
    private country: string;
    private weather: any;

    constructor(city: string, country: string, weather: any) {
      this.city = city;
      this.country = country;
      this.weather = weather;
    }
}
