const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  // Set up the spy before each test
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  // Restore the spy after each test
  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log the correct total for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Assert that console.log was called only once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log the correct total for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    // Assert that console.log was called only once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
