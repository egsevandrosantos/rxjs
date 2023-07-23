import { Component, OnInit } from '@angular/core';
import { find, of } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent implements OnInit {
  ngOnInit(): void {
    this.operatorFind();
  }

  operatorFind() {
    const names$ = of('Evandro', 'Gabriel', 'Daniel', 'Santos');
    const findName$ = names$.pipe(find((name) => name === 'Evandro')); // Evandro
    const findName2$ = names$.pipe(find((name) => name === 'Zé')); // undefined
    findName$.subscribe(console.log);
    findName2$.subscribe(console.log);
  }
}
