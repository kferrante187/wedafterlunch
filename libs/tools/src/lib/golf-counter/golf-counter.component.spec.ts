import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { GolfCounterComponent } from './golf-counter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromGolfCounterReducer from '../state/reducers/counter.reducer';
import * as rootState from '../state';
import { CounterEvents } from '../state/actions/counter.actions';
describe('GolfCounterComponent', () => {
  let spectator: Spectator<GolfCounterComponent>;
  let store: MockStore;
  const initialState = {
    counter: {
      count: fromGolfCounterReducer.reducer,
    },
  };

  const createComponent = createComponentFactory({
    component: GolfCounterComponent,
    providers: [
      provideMockStore({
        initialState,
        selectors: [
          {
            selector: rootState.selectCurrentCount,
            value: 444,
          },
        ],
      }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    store = spectator.inject(MockStore);
    spectator.detectChanges();
  });

  it('Initial State', () => {
    const component = spectator.query('[data-testid="counter-component"]');
    expect(component).toMatchSnapshot();
  });

  it('can increment', () => {
    const incrementButton = spectator.query('[data-testid="increment-button"]');
    if (!incrementButton) {
      fail('No Increment button found');
    } else {
      jest.spyOn(store, 'dispatch');
      spectator.click(incrementButton);
      expect(store.dispatch).toHaveBeenCalledWith(CounterEvents.increment());
    }
  });
  it('demo of just a snapshot of a span', () => {
    const component = spectator.query('[data-testid="current"]');
    expect(component).toMatchSnapshot();
  });
});
