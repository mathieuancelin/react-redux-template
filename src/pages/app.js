import React from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import { Clicker } from '../components/clicker';
import { SimpleClicker } from '../components/simpleclicker';

import { configureCounterStore } from '../store';
import { DevTools } from '../components/devtools';

const store2 = configureCounterStore({ counter: 0 });

console.log(store2);

export const App = React.createClass({
  render() {
    return (
      <Provider store={{}}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <SimpleClicker />
          <Link to="/about">About</Link>
        </div>
      </Provider>
    );
  },
});
