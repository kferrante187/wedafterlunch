import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map } from 'rxjs';
import { SongsCommands } from '../actions/songs.actions';
import { FeatureEvents } from '../actions/tools.actions';

@Injectable()
export class ToolsEffects {
  loadSongsOnFeatureEntered$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FeatureEvents.entered),
      map(() => SongsCommands.load()),
    );
  });

  constructor(private actions$: Actions) {}
}
