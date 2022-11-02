import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentCount } from '../state';
import { CounterEvents } from '../state/actions/counter.actions';

@Component({
  selector: 'adt-golf-counter',
  templateUrl: './golf-counter.component.html',
  styleUrls: ['./golf-counter.component.css'],
})
export class GolfCounterComponent {
  current$ = this.store.select(selectCurrentCount);

  constructor(private store: Store) {}
  increment() {
    this.store.dispatch(CounterEvents.increment());
  }

  decrement() {
    this.store.dispatch(CounterEvents.decrement());
  }
}
