const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const BASE_URL = 'http://localhost:7865';

  it('should return status code 200 for GET /', (done) => {
    request(`${BASE_URL}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for GET /', (done) => {
    request(`${BASE_URL}/`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return 404 for non-existent routes', (done) => {
    request(`${BASE_URL}/nonexistent`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Cart page', () => {
  const BASE_URL = 'http://localhost:7865';

  it('should return status code 200 when :id is a number', (done) => {
    request(`${BASE_URL}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 when :id is not a number', (done) => {
    request(`${BASE_URL}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  const BASE_URL = 'http://localhost:7865';

  it('should return status code 200 for GET /available_payments', (done) => {
    request(`${BASE_URL}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods for GET /available_payments', (done) => {
    const expectedPaymentMethods = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };

    request(`${BASE_URL}/available_payments`, (error, response, body) => {
      const responseBody = JSON.parse(body);
      expect(responseBody).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });
});

describe('Login page', () => {
  const BASE_URL = 'http://localhost:7865';

  it('should return status code 200 for POST /login', (done) => {
    const data = { userName: 'Betty' };

    request.post(
      {
        url: `${BASE_URL}/login`,
        json: data,
        headers: { 'Content-Type': 'application/json' }
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('should return the correct welcome message for POST /login', (done) => {
    const data = { userName: 'Betty' };

    request.post(
      {
        url: `${BASE_URL}/login`,
        json: data,
        headers: { 'Content-Type': 'application/json' }
      },
      (error, response, body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
