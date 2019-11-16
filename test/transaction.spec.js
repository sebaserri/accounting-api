const app = require('../index');
const request = require('supertest');

describe('GET /api/transaction', function () {
    it('respond with json containing a list of all transactions', function (done) {
        request(app)
            .get('/api/transaction')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /api/transaction/:id', function () {
    it('respond with json containing a single transaction', function (done) {
        request(app)
            .get('/api/transaction/fc2db2b9-0c85-4846-aba2-701c98b15c78')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /api/transaction', function () {
    let data = {
        "type": "credit",
        "amount": "300",
    };
    it('respond with 201 created', function (done) {
        request(app)
            .post('/api/transaction')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

