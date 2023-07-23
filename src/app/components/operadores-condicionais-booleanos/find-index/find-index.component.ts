import { Component, OnInit } from '@angular/core';
import { findIndex, of } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.scss'],
})
export class FindIndexComponent implements OnInit {
  ngOnInit(): void {
    this.operatorFindIndex();
  }

  operatorFindIndex() {
    const names$ = of('Evandro', 'Gabriel', 'Daniel', 'Santos');
    const findNameIndex$ = names$.pipe(findIndex((name) => name === 'Evandro')); // 0
    const findNameIndex2$ = names$.pipe(findIndex((name) => name === 'Zé')); // -1
    findNameIndex$.subscribe(console.log);
    findNameIndex2$.subscribe(console.log);
  }
}
