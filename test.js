var expect = require('chai').expect;
var request = require('supertest')('http://localhost:8000/api');

describe('API', function(){
  it('respond with json', function(done){
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done();
      });
  });

    describe('Get Data', function () {
        it('respond with json', function(done){
            request
            .get('/data')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
              if (err) return done(err);
              done();
            });
        });

      // it('should have a data property', function(done){
      //   request
      //     .get('/')
      //     .set('Accept', 'application/json')
      //     .expect().to.have.property('name');
      //     .expect({message:'hooray! welcome to our api!'}, done);
      // });
    })

    describe('Post Data', function () {
        it('respond with json', function(done){
            request
            .post('/data')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
              if (err) return done(err);
              done();
            });
        });
    })

});

