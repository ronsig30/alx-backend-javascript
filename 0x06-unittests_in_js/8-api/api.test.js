const request = require('request');
const { expect } = require('chai');
let server;

describe('Index page', () => {
  const BASE_URL = `http://localhost:${process.env.PORT || 7865}`;

  before((done) => {
    delete require.cache[require.resolve('./api')]; // Clear the cache to reload the module
    server = require('./api');
    done();
  });

  after((done) => {
    server.close(() => done());
  });

  it('should return status 200 for GET /', (done) => {
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
});
