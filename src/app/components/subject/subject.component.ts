import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  ngOnInit() {
    this.initSubject();
  }

  initSubject() {
    const observable = new Observable((observer) => {
      observer.next(10);
      observer.next(12);
    });

    observable.subscribe({
      next: (res) => console.log('1 Observable', res),
    }); // Recebe 10, 12

    observable.subscribe({
      next: (res) => console.log('2 Observable', res),
    }); // Recebe 10, 12

    const subject = new Subject<number>();

    subject.subscribe({
      next: (res) => console.log('1 Subject', res),
    }); // Recebe 10, 12, 14

    subject.subscribe({
      next: (res) => console.log('2 Subject', res),
    }); // Recebe 10, 12, 14

    subject.next(10);
    subject.next(12);

    subject.subscribe({
      next: (res) => console.log('3 Subject', res),
    }); // Recebe apenas 14

    subject.next(14);

    const subject2 = new BehaviorSubject<number>(0); // Recebe um valor inicial e emite o ultimo valor armazenado para novos subscribers

    subject2.subscribe({
      next: (res) => console.log('1 BehaviorSubject', res),
    }); // Recebe 0, 10, 12, 14

    subject2.subscribe({
      next: (res) => console.log('2 BehaviorSubject', res),
    }); // Recebe 0, 10, 12, 14

    subject2.next(10);
    subject2.next(12);

    subject2.subscribe({
      next: (res) => console.log('3 BehaviorSubject', res),
    }); // Recebe 12, 14

    subject2.next(14);

    const subject3 = new ReplaySubject(); // Emite todos os valores de acordo com um buffer configurado (padrão infinito)

    subject3.subscribe({
      next: (res) => console.log('1 ReplaySubject', res),
    }); // Recebe 10, 12, 14

    subject3.subscribe({
      next: (res) => console.log('2 ReplaySubject', res),
    }); // Recebe 10, 12, 14

    subject3.next(10);
    subject3.next(12);

    subject3.subscribe({
      next: (res) => console.log('3 ReplaySubject', res),
    }); // Recebe 10, 12, 14

    subject3.next(14);

    // Observable emite todos os valores para o primeiro subscriber, depois todos os valores para o segundo subscriber, ...
    // Subject emite o primeiro valor para todos os subscribers, depois o segundo valor para todos os subscribers, ...
  }
}
