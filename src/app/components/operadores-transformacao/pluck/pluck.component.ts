import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  ngOnInit(): void {
    this.operatorPluck();
  }

  operatorPluck() {
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
        job: {
          title: 'Developer',
          language: 'JS',
        },
      },
    ]);

    // pluck is deprecated
    const names$ = arr$.pipe(map((x) => x?.name));
    names$.subscribe(console.log);

    const ages$ = arr$.pipe(map((x) => x?.age));
    ages$.subscribe(console.log);

    const jobLanguages$ = arr$.pipe(map((x) => x?.job?.language));
    jobLanguages$.subscribe(console.log);
  }
}
