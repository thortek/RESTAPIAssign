var expect = require('chai').expect;
var request = require('supertest')('http://localhost:8000/api');

describe('API - /api', function(){
  it('should respond with json', function(done){
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done();
      });
  });

    describe('GET Data - /api/data', function () {
        it('should respond with json', function(done){
            request
            .get('/data')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
              if (err) return done(err);
              done();
            });
        });

      it('should have a data property', function(done){
        request
          .get('/')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res){
            if (err) return done(err);
            expect(res.body).to.have.property('data');
            done();
          });
      });
    })

    describe('POST Data - api/data', function () {
        it('should respond with json', function(done){
            request
            .post('/data')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
              if (err) return done(err);
              done();
            });
        });

        it('should respond with the json data sent in the query proterty', function (done) {
            request
            .post('/data')
            .send({ data: 'ThisIsTheQuery' })
            .end(function(err, res){
                expect(res.body).to.be.json
                expect(res.body.query).to.equal('ThisIsTheQuery')
              done();
            });
        });
    })

});

