import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  options = [];

  constructor(private http: HttpClient) {
  }

  getUsers(username: string) {
    const url = `https://api.github.com/search/users?`;
    let params = new HttpParams();
    params = params.append('q', username);
    params = params.append('type', 'Users');
    return this.http.get(url, { params: params });
  }
}
