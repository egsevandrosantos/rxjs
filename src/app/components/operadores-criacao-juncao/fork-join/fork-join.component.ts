import { Component, OnInit } from '@angular/core';
import { forkJoin, of, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss'],
})
export class ForkJoinComponent implements OnInit {
  ngOnInit(): void {
    this.operatorForkJoin();
  }

  operatorForkJoin() {
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:8080/generic/users'),
      apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1'),
    });

    const httpMulti$ = forkJoin({
      first: of(1, 2, 3),
      second: timer(3000),
      pro: Promise.resolve(10),
    });

    http$.subscribe((res) => console.log(res)); // Recebe a resposta das duas request
    httpMulti$.subscribe((res) => console.log(res)); // Recebe 3, 0 e 10

    // Fork join retorna o ultimo elemento emitido por cada observable e espera todos os observables serem resolvidos

    const httpMulti2$ = forkJoin({
      first: of(1, 2, 3),
      second: timer(3000),
      error: throwError(() => new Error('Ocorreu um erro')),
      error2: throwError(() => new Error('Ocorreu um erro 2')),
      pro: Promise.resolve(10),
    });
    httpMulti2$.subscribe((res) => console.log(res)); // Recebe Ocorreu um erro

    // Se um ou mais observables retorna erro apenas o primeiro que responde com erro é retornado no subscribe e os outros observables são ignorados
  }
}
