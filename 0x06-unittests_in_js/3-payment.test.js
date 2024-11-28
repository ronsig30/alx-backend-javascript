// 3-payment.test.js

const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Create a spy on the calculateNumber method of Utils
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Check if the spy was called with the correct arguments
    sinon.assert.calledWith(spy, 'SUM', 100, 20);

    // Restore the spy to avoid side effects in future tests
    spy.restore();
  });
});
