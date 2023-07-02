import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss'],
})
export class MapToComponent implements OnInit {
  ngOnInit(): void {
    this.operatorMapTo();
  }

  operatorMapTo() {
    const click = fromEvent(document, 'click');

    // mapTo esta depreciado
    const mapTo$ = click.pipe(map(() => 'Hello world!')); // Retorna Hello World! no subscribe
    mapTo$.subscribe(console.log);

    const it$ = interval(1000);
    const mapToIt$ = it$.pipe(map(() => 'Gerou um numero')); // Retorna Gerou um numero no subscribe
    mapToIt$.subscribe(console.log);
  }
}
