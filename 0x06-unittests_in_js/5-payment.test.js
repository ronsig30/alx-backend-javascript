const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Stub the calculateNumber function to return a predictable value
    sinon.stub(Utils, 'calculateNumber').returns(120);

    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy after each test
    sinon.restore();
  });

  it('should log the correct message for totalAmount 100 and totalShipping 20', () => {
    sendPaymentRequestToApi(100, 20);
    
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message for totalAmount 10 and totalShipping 10', () => {
    // Update the stub to return the expected total for this test case
    Utils.calculateNumber.returns(20);
    
    sendPaymentRequestToApi(10, 10);
    
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
