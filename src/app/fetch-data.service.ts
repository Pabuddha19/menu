import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}
  url = 'https://haru-blank.github.io/data_server/food_data.json';
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.url);
  }
}
