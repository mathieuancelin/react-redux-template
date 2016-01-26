import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { counter } from './counter';

export default combineReducers({
  counter,
  routing: routeReducer,
});
