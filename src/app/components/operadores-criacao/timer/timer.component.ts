import { Component, OnInit } from '@angular/core';
import { concatMap, map, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  ngOnInit(): void {
    this.operatorTimer();
  }

  operatorTimer() {
    const values = of(1, 2, 3);
    timer(5000) // Igual ao setTimeout, esperamos alguns milisegundos para executar algo
      .pipe(
        concatMap(() => values) // Retorna o values como Observable que iremos nos inscrever no próximo subscribe
      ) // Pipe permite encadear operadores (usar varios operadores)
      .subscribe(console.log);
  }
}
