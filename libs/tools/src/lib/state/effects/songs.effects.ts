import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  SongsCommands,
  SongsDocuments,
  SongsEvents,
} from '../actions/songs.actions';
import { SongEntity } from '../reducers/songs.reducer';

@Injectable()
export class SongEffects {
  // when we are commanded to load the songs, go to the api and get them, and return a songs document with those songs.

  // NOTE: Don't REALLY hardcode URLS, use a configuration service, etc.

  loadSongs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongsCommands.load),
      switchMap(() =>
        this.client
          .get<{ data: SongEntity[] }>('http://localhost:9999/songs')
          .pipe(
            map((r) => r.data),
            map((payload) => SongsDocuments.songs({ payload })),
            catchError((err) => of(SongsEvents.error({ message: 'Blammo!' }))),
          ),
      ),
    );
  });

  constructor(private actions$: Actions, private client: HttpClient) {}
}
