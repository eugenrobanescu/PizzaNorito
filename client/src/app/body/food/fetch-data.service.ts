import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(private http: HttpClient) {}

  getData(id) {
    return this.http.get(`http://localhost:8000/api/food/${id}`);
  }
  updateData() {}
}
