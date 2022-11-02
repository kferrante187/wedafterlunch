import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';
import * as fromSongs from './reducers/songs.reducer';
export const FEATURE_NAME = 'tools';

export interface ToolsState {
  counter: fromCounter.CounterState;
  songs: fromSongs.SongListState;
}

export const reducers: ActionReducerMap<ToolsState> = {
  counter: fromCounter.reducer,
  songs: fromSongs.reducer,
};

// 1. Feature Selector
const selectFeature = createFeatureSelector<ToolsState>(FEATURE_NAME);

// 2. Selector per "branch" of the feature.
const selectCounterBranch = createSelector(selectFeature, (f) => f.counter);
const selectSongsBranch = createSelector(selectFeature, (f) => f.songs);
// 3. Any helpers (optional)

const { selectAll: selectAllSongsArray } =
  fromSongs.adapter.getSelectors(selectSongsBranch);
// 4. What our component(s) need.

export const selectSongsList = selectAllSongsArray;
// 4. What our component(s) need.

export const selectSongListLoaded = createSelector(
  selectSongsBranch,
  (b) => b.loaded,
);
export const selectCurrentCount = createSelector(
  selectCounterBranch,
  (b) => b.current,
);

export const selectCountingBy = createSelector(
  selectCounterBranch,
  (b) => b.by,
);

export const selectSongListErrored = createSelector(
  selectSongsBranch,
  (b) => b.errored,
);
