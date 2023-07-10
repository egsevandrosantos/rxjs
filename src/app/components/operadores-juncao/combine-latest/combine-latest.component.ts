import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit {
  ngOnInit(): void {
    this.operatorCombineLatest();
  }

  operatorCombineLatest() {
    const obs1$ = interval(1000).pipe(take(4));
    const obs2$ = of(5, 6, 7, 8);
    const obs3$ = interval(1000).pipe(take(4));

    // obs1$.subscribe(console.log); // 0, 1, 2, 3
    // obs2$.subscribe(console.log); // 5, 6, 7, 8
    // obs3$.subscribe(console.log); // 0, 1, 2, 3

    const combine$ = combineLatest([obs1$, obs2$, obs3$]);
    // Combina o ultimo valor emitido por cada observable
    combine$.subscribe(console.log); // [0, 8, 0], [1, 8, 0], [1, 8, 1], [2, 8, 1], [2, 8, 2], [3, 8, 2], [3, 8, 3]
  }
}
