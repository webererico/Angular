import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiInterface } from './api-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'https://gateway.marvel.com/v1/public';

  constructor(private http: HttpClient) {}

  // GET 
  getData(): Observable<ApiInterface> {
    return this.http.get<ApiInterface>(`${this.apiURL}/comics`, {
      params: {
        ts: 1,
        apikey: '5036ede6e2a6d4261eb120fb2b396041',
        hash: '62353fdce5591d6862190ef63237b9a6'
      }
    });
  }

}


