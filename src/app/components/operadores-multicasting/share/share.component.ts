import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.operatorShare();
  }

  operatorShare() {
    const obsUser$ = this.apiService.getUserShare(); // Realiza uma nova requisição
    const nameEvandro$ = obsUser$.pipe(
      // Realiza uma nova requisição (com o share chama uma unica vez)
      map((datas: any) =>
        datas.filter((data: any) => data.name === 'Evandro Santos')
      )
    );
    const nameGabriel$ = obsUser$.pipe(
      // Realiza uma nova requisição (com o share chama uma unica vez)
      map((datas: any) =>
        datas.filter((data: any) => data.name === 'Gabriel Santos')
      )
    );
    obsUser$.subscribe(console.log);
    nameEvandro$.subscribe(console.log);
    nameGabriel$.subscribe(console.log);
  }
}
