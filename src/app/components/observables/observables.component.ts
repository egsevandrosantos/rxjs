import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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

    observable.subscribe(observer);
  }
}
