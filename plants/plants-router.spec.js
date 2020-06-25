const request = require('supertest')
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('plants-router', () => {
    beforeEach(async () => {
        await db('plants').truncate();
        await db('users').truncate();
    })

    describe('GET /api/plants/id', () => {
    it('should return 404 for invalid id', async () => {
    await request(server)
      .post('/api/auth/register')
      .send({username: "user", password: "password", phoneNumber: "1212121"})
      .then(result => {
        const token = result.body.token
        console.log('token',token)
        return request(server)
          .get('/api/plants/1')
          .set({authorization: token})
          .then(res =>{
            expect(res.status).toBe(404)
          })  
      })
  })
})


describe('DELETE /:id', ()=>{
    it('Should return successful delete message', async ()=>{
      let token = ""
      await request(server)
        .post('/api/auth/register')
        .send({
          username: "user",
          password: "password",
          phoneNumber: "1234567890"
        })
        .then(result => token = result.body.token)
      await request(server)
        .post('/api/users/1/plants')
        .send({
          nickname: "Allen",
          species: "Allium genus",
          h2oFrequency: "2 times per week"

        })
        .set({authorization: token})
      return request(server)
        .delete('/api/plants/1')
        .set({authorization: token})
        .then(res => {
          expect(res.type).toBe('application/json')
          expect(res.body).toEqual({message: `Plant with ID 1 has been removed`})
        })
    })
  })
})