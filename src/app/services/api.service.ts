import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, forkJoin, interval, merge, zip } from 'rxjs';

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

  getUsersWithMerge() {
    const it$ = interval(5000);
    const apiLocal$ = this.http.get('http://localhost:8080/generic/users');
    const apiExterna$ = this.http.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const result$ = merge(it$, apiLocal$, apiExterna$);
    return result$;
  }

  getUsersWithConcat() {
    // const it$ = interval(1000);
    const apiLocal$ = this.http.get('http://localhost:8080/generic/users');
    const apiExterna$ = this.http.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const result$ = concat(apiLocal$, apiExterna$);
    return result$;
  }
}
