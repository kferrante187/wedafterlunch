import { createActionGroup, props, emptyProps } from '@ngrx/store';

export const CounterEvents = createActionGroup({
  source: 'Tools Counter Events',
  events: {
    increment: emptyProps(),
    decrement: emptyProps(),
  },
});

export const CounterCommands = createActionGroup({
  source: 'Tools Counter Commands',
  events: {},
});

export const CounterDocuments = createActionGroup({
  source: 'Tools Counter Documents',
  events: {},
});
