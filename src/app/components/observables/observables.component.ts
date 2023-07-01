import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit {
  ngOnInit(): void {
    this.initObservable();
  }

  initObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(10);
      subscriber.next('Evandro');
      subscriber.next(true);
      subscriber.next({ name: 'Evandro' });
      subscriber.complete();
    });

    const it = interval(1000); // Cria um observable que quando escutado gera um numero incremental a partir de 0 com 1 segundo de intervalo
    const observer = {
      next: (res: any) => {
        console.log('Observer next value:', res);
      },
      error: (err: any) => {
        console.error('Observer error:', err);
      },
      complete: () => {
        console.log('Observer complete');
      },
    };

    const subscription = observable.subscribe(observer);
    const subscription2 = it.subscribe(console.log);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 3000);
    subscription.unsubscribe();
  }
}
