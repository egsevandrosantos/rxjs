import { Component, OnInit } from '@angular/core';
import { interval, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss'],
})
export class TakeWhileComponent implements OnInit {
  ngOnInit(): void {
    this.operatorTakeWhile();
  }

  operatorTakeWhile() {
    const it$ = interval(1000);
    const nums$ = it$.pipe(
      tap((val) => console.log('Tap', val)), // Tap faz um subscribe em nosso observable e retorna o mesmo observable
      takeWhile((val) => val <= 5) // Continua emitindo valor enquando o valor for menor ou igual a 5
    );
    nums$.subscribe(console.log);
  }
}
