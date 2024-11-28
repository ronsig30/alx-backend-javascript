// 5-payment.test.js

const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let logSpy;

  // beforeEach hook to set up the spy before each test
  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });

  // afterEach hook to restore the spy after each test
  afterEach(() => {
    logSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called once with the correct message
    sinon.assert.calledOnce(logSpy);
    sinon.assert.calledWith(logSpy, 'The total is: 120');
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called once with the correct message
    sinon.assert.calledOnce(logSpy);
    sinon.assert.calledWith(logSpy, 'The total is: 20');
  });
});
