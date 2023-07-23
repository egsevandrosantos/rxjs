import { Component, OnInit } from '@angular/core';
import { EMPTY, Subject, isEmpty } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.scss'],
})
export class IsEmptyComponent implements OnInit {
  ngOnInit(): void {
    this.operatorIsEmpty();
  }

  operatorIsEmpty() {
    const subject$ = new Subject<string>();
    subject$.subscribe(console.log); // Evandro

    const result$ = subject$.pipe(isEmpty());
    result$.subscribe(console.log); // False pois emitiu Evandro

    subject$.next('Evandro');

    subject$.subscribe(console.log); // Não recebe valor

    const result2$ = EMPTY.pipe(isEmpty());
    result2$.subscribe(console.log); // True
  }
}
