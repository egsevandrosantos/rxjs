import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  concat,
  delay,
  forkJoin,
  interval,
  map,
  merge,
  of,
  retry,
  share,
  shareReplay,
  throwError,
  toArray,
  zip,
} from 'rxjs';

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

  getUsersHttp() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(map((res: any) => res.title));
  }

  getUserSwitchMap() {
    return this.http.get('http://localhost:8080/generic/usersCpfs');
  }

  getUserSwitchMapSearch(cpf: string) {
    return this.http.get(
      `http://localhost:8080/generic/users?where=cpf=${cpf}`
    );
  }

  getUsersToArray() {
    const obj = { name: 'Evandro' };

    const arr$ = of(obj).pipe(toArray()); // Transforma o valor em array
    arr$.subscribe(console.log);

    return this.http
      .get('http://localhost:8080/generic/users/1')
      .pipe(toArray());
  }

  getUsersDebounceTime(name: string) {
    return this.http.get(
      `http://localhost:8080/generic/users?where=name=${name}`
    );
  }

  getUserShareReplay() {
    return this.http
      .get(`http://localhost:8080/generic/users`)
      .pipe(shareReplay(1)); // Retorna com ReplaySubject, parametro é o buffer
  }

  getUserShare() {
    return this.http.get(`http://localhost:8080/generic/users`).pipe(share()); // Retorna com um Subject
  }

  getUserCatchError() {
    return (
      this.http
        .get(`http://localhost:8080/generic/users/-1`)
        // .pipe(catchError((error) => of('Ocorreu um erro: ', error)));
        .pipe(
          catchError((error) => {
            if (error.status === 0) {
              return of('Ocorreu um erro na aplicação. Tente mais tarde!');
            } else if (error.status === 404) {
              // return of(error.message);
              console.log(error.message);
            } else {
              return of('Ocorreu um erro no servidor. Tente mais tarde!');
            }

            return throwError(() => 'Ocorreu um erro');
          }),
          retry(2) // Tenta a primeira vez + o número informado (1 + 2 = 3)
        )
    );
  }

  getUserDelay() {
    return this.http
      .get('http://localhost:8080/generic/users')
      .pipe(delay(5000)); // Realiza a requisição e após 5 segundos retorna o valor
  }
}
