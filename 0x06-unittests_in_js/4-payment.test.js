const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;

  beforeEach(() => {
    // Stub the calculateNumber function to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call Utils.calculateNumber with SUM and log the correct message', () => {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    consoleSpy.restore();
  });
});
