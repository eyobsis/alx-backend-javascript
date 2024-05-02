const { expect } = require('chai');
const request = require('request');

describe('Payment System API Integration Tests', () => {
  const apiUrl = 'http://localhost:7865';

  it('should return a 200 status code and a welcome message for GET /', (done) => {
    request.get(`${apiUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return a 200 status code and payment methods for GET /cart/:id with a valid id', (done) => {
    request.get(`${apiUrl}/cart/47`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 47');
      done();
    });
  });

  it('should return a 404 status code for GET /cart/:id with a negative id', (done) => {
    request.get(`${apiUrl}/cart/-47`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return a 404 status code for GET /cart/:id with a non-numeric id', (done) => {
    request.get(`${apiUrl}/cart/d200-44a5-9de6`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return a 200 status code and a welcome message for POST /login with valid credentials', (done) => {
    request.post(`${apiUrl}/login`, { json: { userName: 'Pinkbrook' } }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Pinkbrook');
      done();
    });
  });

  it('should return a 200 status code and available payment methods for GET /available_payments', (done) => {
    request.get(`${apiUrl}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});
