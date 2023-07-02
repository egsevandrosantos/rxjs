import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements AfterViewInit {
  @ViewChild('myButton') myButton!: ElementRef;

  constructor(private apiService: ApiService) {}

  ngAfterViewInit(): void {
    this.operatorSwitchMap2();
  }

  operatorSwitchMap() {
    fromEvent(this.myButton.nativeElement, 'click')
      .pipe(
        switchMap(() => this.apiService.getUserSwitchMap()), // Quando o click é disparado executamos essa função e retornamos esse resultado como observable
        map((res: any) => res[0].cpf), // Quando a requisição acima for feita retormamos o cpf que veio na resposta como observable
        switchMap((cpf: string) => this.apiService.getUserSwitchMapSearch(cpf)) // Pegamos o cpf do map acima e fazemos outra requisição retornando esse resultado como observable
      )
      .subscribe(console.log); // Pegamos o resultado da ultima requisição
    // Quando executado novamente o rxjs faz o unsubscribe automatico
  }

  operatorSwitchMap2() {
    fromEvent(document, 'click')
      .pipe(
        switchMap(() => interval(1000)) // Após o clique é retornado esse interval como observable para o subscribe (a cada clique é zerado e iniciado novamente pois o rxjs faz o unsubscribe automaticamente)
      )
      .subscribe(console.log);
    // Quando executado novamente o rxjs faz o unsubscribe automatico
  }
}
