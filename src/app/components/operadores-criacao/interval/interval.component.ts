import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  ngOnInit(): void {
    this.operatorInterval();
  }

  operatorInterval() {
    const num = interval(1000); // Gera numeros de 1 em 1 com um intervalo definido em milisegundos, o primeiro numero também é gerado após esse intervalo
    const subscription = num.subscribe((res) => console.log(res));
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}
