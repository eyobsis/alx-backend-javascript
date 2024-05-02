const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi function', () => {
  let consoleLogger;

  beforeEach(() => {
    consoleLogger = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogger.restore();
  });

  it('logs the correct total amount to the console when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogger.calledWith('The total is: 120')).to.be.true;
    expect(consoleLogger.calledOnce).to.be.true;
  });

  it('logs the correct total amount to the console when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogger.calledWith('The total is: 20')).to.be.true;
    expect(consoleLogger.calledOnce).to.be.true;
  });
});
