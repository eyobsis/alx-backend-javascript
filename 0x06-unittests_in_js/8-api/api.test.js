const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
  it('should return a 200 status code', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should not return an error', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(err).to.be.null;
      done();
    });
  });
});
