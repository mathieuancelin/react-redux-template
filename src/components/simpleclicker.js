import React from 'react';

export const SimpleClicker = React.createClass({
  getInitialState() {
    return {
      times: 0,
    };
  },
  increment() {
    this.setState({ times: this.state.times + 1 });
  },
  render() {
    return (
      <div>
        <span>You have clicked {this.state.times} times</span>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  },
});
