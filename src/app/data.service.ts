import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter === 0) return;

    this.counter--;
  }

  constructor() {}
}
