import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers() {
    const http$ = forkJoin({
      apiLocal: this.http.get('http://localhost:8080/generic/users'),
      apiExterna: this.http.get('https://jsonplaceholder.typicode.com/todos/1'),
    });

    return http$;
  }

  getUsersWithZip() {
    const apiLocal$ = this.http.get('http://localhost:8080/generic/users');
    const apiExterna$ = this.http.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const result$ = zip(apiLocal$, apiExterna$);
    return result$;
  }
}
