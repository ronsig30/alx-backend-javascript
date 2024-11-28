const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
const server = require('./api'); // Import the server

chai.use(chaiHttp);

describe('Index page', () => {
  after(() => {
    server.close(); // Close the server after tests
  });

  it('should return status 200', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct message', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
