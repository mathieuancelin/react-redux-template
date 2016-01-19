import { DevTools } from '../components/devtools';
import { createStore, compose } from 'redux';
import reducers from '../reducers';

const finalCreateStore = compose(
  DevTools.instrument()
)(createStore);

export function configureCounterStore(initialState) {
  console.log(reducers);
  console.log(initialState);
  return finalCreateStore(reducers, initialState);
}
