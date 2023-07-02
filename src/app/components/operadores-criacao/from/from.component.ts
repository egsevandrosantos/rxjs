import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent implements OnInit {
  ngOnInit(): void {
    this.operatorFrom();
  }

  operatorFrom() {
    const arr = from([1, 2, 3, 4, 5]); // Emite valor 1, depois emite valor 2, ...
    const promise = from(new Promise((resolve) => resolve('Olá mundo!'))); // Converte a Promise em Observable
    const str = from('Olá mundo!'); // Emite valor O, depois l, ...

    arr.subscribe((res) => console.log(res));
    promise.subscribe((res) => console.log(res));
    str.subscribe((res) => console.log(res));
  }
}
