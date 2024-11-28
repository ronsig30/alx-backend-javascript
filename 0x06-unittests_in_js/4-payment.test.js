// 4-payment.test.js

const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the correct message', () => {
    // Create a stub for Utils.calculateNumber that always returns 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy for console.log to verify the correct message is logged
    const logSpy = sinon.spy(console, 'log');

    // Call the function with test data
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with 'SUM', 100, and 20
    sinon.assert.calledWith(stub, 'SUM', 100, 20);

    // Assert that the correct message was logged
    sinon.assert.calledWith(logSpy, 'The total is: 10');

    // Restore the stub and spy
    stub.restore();
    logSpy.restore();
  });
});
