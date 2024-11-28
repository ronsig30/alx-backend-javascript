const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and spy on console.log', () => {
    // Stub Utils.calculateNumber to return 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the correct arguments
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the stub and the spy
    stub.restore();
    consoleSpy.restore();
  });
});
