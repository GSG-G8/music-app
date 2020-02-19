const request = require('supertest');

const app = require('../app');

test('test main route /',(done)=>{
  request(app)
  .get('/')
  .expect(200)
  .expect('Content-Type', /html/)
  .end((err,res)=>{
      if(err) return done(err)
      else done();
  })
})

test('test search route /search',(done)=>{
  request(app)
  .get('/search')
  .expect(200)
  .expect('Content-Type', /html/)
  .end((err,res)=>{
      if(err) return done(err)
      else done();
  })
})

test('test error route 404',(done)=>{
    request(app)
    .get('/error')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err,res)=>{
        if(err) return done(err)
        else done();
    })
})


