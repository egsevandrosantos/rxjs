import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
})
export class OfComponent implements OnInit {
  ngOnInit(): void {
    this.operatorOf();
  }

  operatorOf() {
    const arr = of([1, 2, 3, 4, 5]); // Emite o array
    const str = of('Olá Mundo!'); // Emite a string
    const multValue = of({ name: 'Evandro' }, true, () => {
      return 'Evandro';
    }); // Emite { name: 'Evandro' }, depois emite true, ...

    arr.subscribe((res) => console.log(res));
    str.subscribe((res) => console.log(res));
    multValue.subscribe((res) => console.log(res));
  }
}
