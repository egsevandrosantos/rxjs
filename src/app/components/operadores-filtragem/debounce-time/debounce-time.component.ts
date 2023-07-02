import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('inputSearch') inputSearch!: ElementRef;

  constructor(private apiService: ApiService) {}

  ngAfterViewInit(): void {
    this.operatorDebounceTime();
  }

  operatorDebounceTime() {
    fromEvent(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000), // Recebe o evento emitido e só emite o próximo caso não receba um novo evento em 1 segundo
        map((ev: any) => ev.target.value), // Recebe o evento emitido e pega o valor que esta no input
        switchMap((val) => this.apiService.getUsersDebounceTime(val)) // Recebe o valor do input e retorna como observable a requisição
      )
      .subscribe(console.log);
  }
}
