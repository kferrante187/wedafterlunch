import { createActionGroup, props, emptyProps } from '@ngrx/store';

export const FeatureEvents = createActionGroup({
  source: 'Tools Feature Events',
  events: {
    entered: emptyProps(),
  },
});

export const FeatureCommands = createActionGroup({
  source: 'Tools Feature Commands',
  events: {},
});

export const FeatureDocuments = createActionGroup({
  source: 'Tools Feature Documents',
  events: {},
});
