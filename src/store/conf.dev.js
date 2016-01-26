import { DevTools } from '../components/devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

export function configureCounterStore(initialState, ...middlewares) {
  const finalCreateStore = compose(
    applyMiddleware(...middlewares),
    DevTools.instrument()
  )(createStore);
  return finalCreateStore(reducers, initialState);
}
