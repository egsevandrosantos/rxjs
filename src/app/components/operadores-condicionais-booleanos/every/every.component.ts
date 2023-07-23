import { Component, OnInit } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss'],
})
export class EveryComponent implements OnInit {
  ngOnInit() {
    this.operatorEvery();
  }

  operatorEvery() {
    const values$ = of(1, 2, 3, 4, 5);
    const equals = values$.pipe(every((x) => x < 5)); // False
    const equals2 = values$.pipe(every((x) => x <= 5)); // True
    equals.subscribe(console.log);
    equals2.subscribe(console.log);
  }
}
