import React from 'react';

if (process.env.NODE_ENV === 'production') {
  module.exports = { DevTools: React.createClass({
    render() {
      return null;
    },
  }) };
} else {
  const createDevTools = require('redux-devtools').createDevTools; // eslint-disable-line
  const LogMonitor = require('redux-devtools-log-monitor').default; // eslint-disable-line
  const DockMonitor = require('redux-devtools-dock-monitor').default; // eslint-disable-line
  module.exports = { DevTools: createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <LogMonitor theme="solarized" />
    </DockMonitor>
  ) };
}
