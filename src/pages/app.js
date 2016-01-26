import React from 'react';
import { Link } from 'react-router';
import { Clicker } from '../components/clicker';
import { SimpleClicker } from '../components/simpleclicker';

import { DevTools } from '../components/devtools';

export const App = React.createClass({
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Clicker />
        <SimpleClicker />
        <Link to="/about">About</Link>
        <DevTools />
      </div>
    );
  },
});
