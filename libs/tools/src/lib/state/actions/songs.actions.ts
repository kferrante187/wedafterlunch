import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';

export const SongsEvents = createActionGroup({
  source: 'List Songs Events',
  events: {
    error: props<{ message: string }>(),
  },
});

export const SongsCommands = createActionGroup({
  source: 'List Songs Commands',
  events: {
    load: emptyProps(),
  },
});

export const SongsDocuments = createActionGroup({
  source: 'List Songs Documents',
  events: {
    songs: props<{ payload: SongEntity[] }>(),
  },
});
