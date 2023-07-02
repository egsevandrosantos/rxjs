import { Component, OnInit } from '@angular/core';
import { filter, from, interval } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  ngOnInit(): void {
    this.operatorFilter();
  }

  operatorFilter() {
    const arr$ = from([
      { name: 'Evandro', age: 10 },
      { name: 'Gabriel', age: 25 },
      { name: 'Daniel', age: 40 },
    ]);

    const names$ = arr$.pipe(filter((value) => value.age > 10));
    names$.subscribe(console.log); // Recebe dois valores separadamente onde a idade é maior que 10

    const it$ = interval(1000);

    const nums$ = it$.pipe(filter((value) => value > 5)); // Começa e emitir valores a partir de 6
    nums$.subscribe(console.log);
  }
}
