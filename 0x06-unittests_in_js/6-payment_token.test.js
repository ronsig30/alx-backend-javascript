// 6-payment_token.test.js

const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        // Assert that the correct data is returned
        if (response.data !== 'Successful response from the API') {
          done(new Error('Expected response data to match'));
        } else {
          done();
        }
      })
      .catch(done); // In case there's an unexpected error
  });

  it('should return nothing when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(response => {
        // Assert that response is undefined (nothing is returned)
        if (response !== undefined) {
          done(new Error('Expected no response'));
        } else {
          done();
        }
      })
      .catch(done); // In case there's an unexpected error
  });
});
