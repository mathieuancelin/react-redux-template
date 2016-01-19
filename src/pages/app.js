import React from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import { Clicker } from '../components/clicker';
import { SimpleClicker } from '../components/simpleclicker';

import { configureCounterStore } from '../store';
import { DevTools } from '../components/devtools';

const store = configureCounterStore({ counter: 0 });

export const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Clicker />
          <SimpleClicker />
          <Link to="/about">About</Link>
          <DevTools />
        </div>
      </Provider>
    );
  },
});
