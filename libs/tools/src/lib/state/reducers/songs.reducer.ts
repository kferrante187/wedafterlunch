import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { SongsDocuments, SongsEvents } from '../actions/songs.actions';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album?: string;
}

export interface SongListState extends EntityState<SongEntity> {
  loaded: boolean;
  errored: boolean;
}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState({
  loaded: false,
  errored: false,
});

export const reducer = createReducer(
  initialState,
  on(SongsEvents.error, (s) => ({ ...s, errored: true })),
  on(SongsDocuments.songs, (s, a) => adapter.setAll(a.payload, s)),
  on(SongsDocuments.songs, (s) => ({ ...s, loaded: true })),
);
