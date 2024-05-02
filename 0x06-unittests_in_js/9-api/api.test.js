const { expect } = require('chai');
const request = require('request');

describe('Payment System API Endpoints', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return a welcome message for GET /', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });

  it('should return payment methods for GET /cart/:id with a valid cart ID', (done) => {
    const cartId = 47;
    request.get(`${baseUrl}/cart/${cartId}`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.contain(`Payment methods for cart ${cartId}`);
      done();
    });
  });

  it('should return a 404 error for GET /cart/:id with a negative cart ID', (done) => {
    const cartId = -47;
    request.get(`${baseUrl}/cart/${cartId}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return a 404 error for GET /cart/:id with a non-numeric cart ID', (done) => {
    const cartId = 'd200-44a5-9de6';
    request.get(`${baseUrl}/cart/${cartId}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
