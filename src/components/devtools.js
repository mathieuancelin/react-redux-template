import React from 'react';

if (process.env.NODE_ENV === 'production') {
  module.exports = { DevTools: React.createClass({
    render() {
      return null;
    },
  }) };
} else {
  const createDevTools = require('redux-devtools').createDevTools;
  const LogMonitor = require('redux-devtools-log-monitor');
  const DockMonitor = require('redux-devtools-dock-monitor');
  module.exports = { DevTools: createDevTools(
     <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
       <LogMonitor theme="solarized" />
     </DockMonitor>
  ) };
}
