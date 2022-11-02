import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';
export const FEATURE_NAME = 'tools';

export interface ToolsState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<ToolsState> = {
  counter: fromCounter.reducer,
};

// 1. Feature Selector
const selectFeature = createFeatureSelector<ToolsState>(FEATURE_NAME);

// 2. Selector per "branch" of the feature.
const selectCounterBranch = createSelector(selectFeature, (f) => f.counter);

// 3. Any helpers (optional)

// 4. What our component(s) need.

export const selectCurrentCount = createSelector(
  selectCounterBranch,
  (b) => b.current,
);

export const selectCountingBy = createSelector(
  selectCounterBranch,
  (b) => b.by,
);
