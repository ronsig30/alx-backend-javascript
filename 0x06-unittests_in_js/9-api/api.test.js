const request = require('supertest');
const app = require('./api');  // Import the app from api.js

describe('Cart API', () => {
  it('Correct status code when :id is a number', (done) => {
    request(app)
      .get('/cart/1')  // Adjust your endpoint as necessary
      .expect(200, done);
  });

  it('Correct status code when :id is NOT a number (=> 404)', (done) => {
    request(app)
      .get('/cart/abc')  // Adjust your endpoint as necessary
      .expect(404, done);
  });
});
