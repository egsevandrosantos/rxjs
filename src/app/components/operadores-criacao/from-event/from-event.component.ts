import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit(): void {
    this.operatorFromEvent();
  }

  operatorFromEvent() {
    // const el = fromEvent(document, 'click');
    const el = fromEvent(this.myButton.nativeElement, 'click');
    el.subscribe((res) => console.log(res));
  }
}
