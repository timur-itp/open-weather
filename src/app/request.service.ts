
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpParams } from 'src/app/utils/httpParams';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseURL = `http://localhost:3000`;
  private awsURL = `https://uovxebzazg.execute-api.us-east-1.amazonaws.com`
  constructor(private http: HttpClient) { }
  

  get(url: string, params: any = {}): Observable<any> {
    return this.http.get(this.baseURL + url, { params: httpParams(params) });
  }

  post(url: string, body: any): Observable<any> {

    return this.http.post(this.baseURL + url, body);
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(this.baseURL + url, body);
  }

  delete(url: string) {
    return this.http.delete(this.baseURL + url);
  }
}
