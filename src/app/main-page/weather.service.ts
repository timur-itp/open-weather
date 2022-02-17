import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';
import { httpParams } from '../utils/httpParams';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseURL = 'http://localhost:3000/dev/get-weather';
  private awsURL = `https://qkwhih5ah4.execute-api.eu-west-1.amazonaws.com/dev/get-weather/`
  
  constructor(private http: HttpClient) { }
   checkWeather(city: string) {
    let params = new HttpParams();
    return this.http.get(this.baseURL, { params:{ city }});
  }
  
}
