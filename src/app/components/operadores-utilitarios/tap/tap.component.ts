import { Component, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  ngOnInit(): void {
    this.operatorTap();
  }

  operatorTap() {
    const arr = of([
      { id: 1, name: 'Evandro', age: 15 },
      { id: 1, name: 'Gabriel', age: 35 },
    ]);

    const subscription = arr.pipe(
      tap((val) => console.log('Antes do map', val)),
      map((array: any) => array.filter((val: any) => val.name === 'Evandro')),
      tap((val) => console.log('Depois do map', val))
    );
    subscription.subscribe();
  }
}
