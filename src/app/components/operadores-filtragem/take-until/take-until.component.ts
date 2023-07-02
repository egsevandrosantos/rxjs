import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss'],
})
export class TakeUntilComponent implements OnInit {
  ngOnInit(): void {
    this.operatorTakeUntil();
  }

  operatorTakeUntil() {
    const it$ = interval(1000);
    const timer$ = timer(5000);
    const nums$ = it$.pipe(takeUntil(timer$)); // Fica ouvindo o observable it$ até que o timer$ emita um valor, quando emitido um valor pelo timer$ é executado o unsubscribe no it$
    nums$.subscribe(console.log);

    const it2$ = interval(1000);
    const click$ = fromEvent(document, 'click');
    const nums2$ = it2$.pipe(takeUntil(click$)); // Fica ouvindo até que o click$ emita um valor
    nums2$.subscribe(console.log);
  }
}
