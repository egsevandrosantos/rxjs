import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.operatorMap();
  }

  operatorMap() {
    const arr$ = from([
      {
        name: 'Evandro Santos',
        id: '1',
        email: 'evandro.santos@gmail.com',
        age: 10,
      },
      {
        name: 'Gabriel Santos',
        id: '2',
        email: 'gabriel.santos@gmail.com',
        age: 25,
      },
      {
        name: 'Daniel Santos',
        id: '3',
        email: 'daniel.santos@gmail.com',
        age: 40,
      },
    ]);
    const nums$ = from([1, 2, 3, 4]);

    const arrMap$ = arr$.pipe(map(({ name }) => name)); // Retorna apenas os nomes
    arrMap$.subscribe(console.log);

    const numsMap$ = nums$.pipe(map((val) => val * 2)); // Para cada valor multiplica por 2 e retorna no subscribe
    numsMap$.subscribe(console.log);

    this.apiService.getUsersHttp().subscribe(console.log);
  }
}
