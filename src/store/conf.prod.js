import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

export function configureCounterStore(initialState, ...middlewares) {
  return applyMiddleware(...middlewares)(createStore)(reducers, initialState);
}
