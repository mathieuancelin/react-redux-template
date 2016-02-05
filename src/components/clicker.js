import React, { PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/counter';

const clicker = React.createClass({
  propTypes: {
    increment: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  },
  render() {
    const { increment, counter } = this.props;
    return (
      <div>
        <span>You have clicked {counter} times</span>
        <button onClick={increment}>+1</button>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export const Clicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(clicker);
