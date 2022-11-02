import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCountingBy } from '../state';
import { CounterPrefsEvents } from '../state/actions/counter-prefs.actions';

@Component({
  selector: 'adt-counter-prefs',
  templateUrl: './counter-prefs.component.html',
  styleUrls: ['./counter-prefs.component.css'],
})
export class CounterPrefsComponent {
  by$ = this.store.select(selectCountingBy);

  constructor(private store: Store) {}
  changeCountBy(by: number) {
    this.store.dispatch(CounterPrefsEvents.byset({ by }));
  }
}
