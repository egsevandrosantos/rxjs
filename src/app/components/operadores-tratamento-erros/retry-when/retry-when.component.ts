import { Component, OnInit } from '@angular/core';
import {
  delayWhen,
  interval,
  map,
  of,
  retry,
  retryWhen,
  tap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss'],
})
export class RetryWhenComponent implements OnInit {
  ngOnInit(): void {
    this.operatorRetryWhen();
  }

  operatorRetryWhen() {
    const it$ = interval(1000);
    const subscription = it$
      .pipe(
        map((val) => {
          if (val > 5) {
            throw val;
          }
          return val;
        }),
        // retryWhen // Deprecated
        retry({
          delay: (val) =>
            // of(val).pipe(tap((val) => console.log('Val is', val))), Val is 6
            timer(val * 1000), // Retry after 6 seconds
        })
      )
      .subscribe(console.log);
  }
}
