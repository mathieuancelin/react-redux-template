import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import { syncHistory } from 'react-router-redux';
import { configureCounterStore } from './store';
import { NotFound } from './pages/404';
import { About } from './pages/about';
import { App } from './pages/app';

export function init() {
  // use redux-simple-router ???
  const history = createHistory({ queryKey: false });
  history.__v2_compatible__ = true; // hack for the 2.0 RC
  const middleware = syncHistory(history);
  const store = configureCounterStore({ counter: 0 }, middleware);

  ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
        <Route path="/yo" component={App} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  ), document.getElementById('app'));
}
