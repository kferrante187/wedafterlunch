import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectSongListErrored,
  selectSongListLoaded,
  selectSongsList,
} from '../../state';

@Component({
  selector: 'adt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  songs$ = this.store.select(selectSongsList);
  loaded$ = this.store.select(selectSongListLoaded);
  errored$ = this.store.select(selectSongListErrored);

  constructor(private store: Store) {}
}
