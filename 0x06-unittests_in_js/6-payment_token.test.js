// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should return a rejected promise when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        // Since it should not resolve, we will fail the test
        done(new Error('Promise should not have resolved'));
      })
      .catch((error) => {
        // If it rejects, we can assert the error message and call done
        expect(error.message).to.equal('Failed to get the payment token');
        done();
      });
  });
});
