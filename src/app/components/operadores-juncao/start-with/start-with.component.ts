import { Component, OnInit } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss'],
})
export class StartWithComponent implements OnInit {
  ngOnInit(): void {
    this.operatorStartWith();
  }

  operatorStartWith() {
    const values = of(1, 2, 3);
    const numbers = values.pipe(startWith(0));
    values.subscribe(console.log); // 1, 2, 3
    numbers.subscribe(console.log); // 0, 1, 2, 3

    const messages = of('World', 'Goodbye');
    const messagesWelcome = messages.pipe(startWith('Hello'));
    messages.subscribe(console.log); // World, Goodbye
    messagesWelcome.subscribe(console.log); // Hello, World, Goodbye
  }
}
