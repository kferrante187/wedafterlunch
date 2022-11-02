import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureEvents } from './state/actions/tools.actions';

@Component({
  selector: 'adt-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent {
  constructor(store: Store) {
    store.dispatch(FeatureEvents.entered());
  }
}
