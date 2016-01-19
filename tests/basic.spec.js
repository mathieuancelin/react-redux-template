/* eslint no-unused-vars:0, no-undef:0, no-unused-expressions:0 */

import React from 'react';
import chai, { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';

import { SimpleClicker } from '../src/components/simpleclicker';

describe('Clicker', () => {
  it('changes count after click', () => {
    const clicker = ReactTestUtils.renderIntoDocument(<SimpleClicker />);
    const span = ReactTestUtils.findRenderedDOMComponentWithTag(clicker, 'span');
    const button = ReactTestUtils.findRenderedDOMComponentWithTag(clicker, 'button');

    expect(span.textContent).to.be.equal('You have clicked 0 times');
    ReactTestUtils.Simulate.click(button);
    expect(span.textContent).to.be.equal('You have clicked 1 times');
  });
});
