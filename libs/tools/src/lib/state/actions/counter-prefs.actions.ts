import { createActionGroup, props, emptyProps } from '@ngrx/store';

export const CounterPrefsEvents = createActionGroup({
  source: 'Tools CounterPrefs Events',
  events: {
    bySet: props<{ by: number }>(),
  },
});

export const CounterPrefsCommands = createActionGroup({
  source: 'Tools CounterPrefs Commands',
  events: {},
});

export const CounterPrefsDocuments = createActionGroup({
  source: 'Tools CounterPrefs Documents',
  events: {},
});
