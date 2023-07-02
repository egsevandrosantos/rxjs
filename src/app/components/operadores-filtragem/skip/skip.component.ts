import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval, skip, tap } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss'],
})
export class SkipComponent implements AfterViewInit {
  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit(): void {
    this.operatorSkip();
  }

  operatorSkip() {
    fromEvent(this.myButton.nativeElement, 'click')
      .pipe(
        skip(4), // Só emite valor a partir do 5º clique
        tap(() => console.log('Cliquei'))
      )
      .subscribe(console.log);

    const it$ = interval(1000);
    it$
      .pipe(
        skip(10) // Só emite valor a partir da 11ª emissão, no caso a partir do valor 10 pois começa em 0
      )
      .subscribe(console.log);
  }
}
