const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done(); // Ensure test completes only after the promise resolves
    }).catch((error) => {
      done(error); // Handle unexpected errors in the promise
    });
  });

  it('should do nothing when success is false', (done) => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined; // No promise should be returned
    done();
  });
});
