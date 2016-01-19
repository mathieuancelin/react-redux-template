import { createStore } from 'redux';
import reducers from '../reducers';

export function configureCounterStore(initialState) {
  return createStore(reducers, initialState);
}
