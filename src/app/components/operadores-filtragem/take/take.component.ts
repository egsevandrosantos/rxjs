import { Component, OnInit } from '@angular/core';
import { from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  ngOnInit(): void {
    this.operatorTake();
  }

  operatorTake() {
    const arr$ = from([
      { name: 'Evandro', age: 10 },
      { name: 'Gabriel', age: 25 },
      { name: 'Daniel', age: 40 },
    ]);

    const names$ = arr$.pipe(
      map((val) => val.name), // Retorna apenas o nome dos objetos
      take(1) // Pega apenas um valor e faz o unsubscribe automaticamente
    );
    names$.subscribe(console.log);

    const it$ = interval(1000);
    const nums$ = it$.pipe(take(5)); // Pega apenas o 5 primeiros valores emitidos e faz o unsubscribe automaticamente
    nums$.subscribe(console.log);
  }
}
