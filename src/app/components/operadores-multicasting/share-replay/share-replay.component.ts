import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss'],
})
export class ShareReplayComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.operatorShareReplay();
  }

  operatorShareReplay() {
    const obsUser$ = this.apiService.getUserShareReplay(); // Realiza uma nova requisição
    const nameEvandro$ = obsUser$.pipe(
      // Realiza uma nova requisição (com o shareReplay chama uma unica vez)
      map((datas: any) =>
        datas.filter((data: any) => data.name === 'Evandro Santos')
      )
    );
    const nameGabriel$ = obsUser$.pipe(
      // Realiza uma nova requisição (com o shareReplay chama uma unica vez)
      map((datas: any) =>
        datas.filter((data: any) => data.name === 'Gabriel Santos')
      )
    );
    obsUser$.subscribe(console.log);
    nameEvandro$.subscribe(console.log);
    nameGabriel$.subscribe(console.log);
  }
}
