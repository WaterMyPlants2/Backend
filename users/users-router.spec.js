const request = require('supertest')
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('users-router', () => {
    beforeEach(async () => {
        await db('users').truncate();
        await db('plants').truncate();
    })

    describe('GET /api/users', () => {
        it('should return 401 for missing credentials', async () => {
            return request(server)
                .get('/api/users')
                .then(res => {
                    expect(res.status).toBe(401)
                })
        })

        it('should return JSON', () => {
            return request(server).get('/api/users')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
    })

    describe('GET /api/users/1/plants', () => {
        it('should return 200', async () => {
            let token = "";
        await request(server)
          .post('/api/auth/register')
          .send({username: "user", password: "password", phoneNumber: "1212121"})
          .then(result =>  token = result.body.token);
        return request(server)
            .get('/api/users/1/plants')
            .set('authorization', token)
            .then(res =>{
            expect(res.status).toBe(200)
            })  
      })
    })


describe('POST /api/users/1/plants', () => {
    it('Returns 201 Created', async () => {
    await request(server)
      .post('/api/auth/register')
      .send({username: "user2", password: "password", phoneNumber: "1212121"})
      .then(result => {
        const token = result.body.token
        // console.log('result',result.body)
        return request(server)
          .post('/api/users/1/plants')
          .set('authorization', token)
          .send({
            user_id: 1,
            nickname:'Allen', 
            species: 'Allium genus', 
            h2oFrequency: '5 times a week', 
            image: 'https://images.unsplash.com/photo-1558350315-8aa00e8e4590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
          })
          .then(res =>{
            expect(res.status).toBe(201)
          })  
      })
  })
})
})

// describe('DELETE /:id', ()=>{
//     it('Should return successful delete message', async ()=>{
//       let token = ""
//       await request(server)
//         .post('/api/auth/register')
//         .send({
//           username: "user",
//           password: "password",
//           phoneNumber: "1234567890"
//         })
//         .then(result => token = result.body.token)
//       await request(server)
//         .post('/api/users/1/plants')
//         .send({
//           nickname: "Allen",
//           species: "Allium genus",
//           h2oFrequency: "2 times per week"

//         })
//         .set({authorization: token})
//       return request(server)
//         .delete('/api/plants/1')
//         .set({authorization: token})
//         .then(res => {
//           expect(res.status).toBe(200)
//           expect(res.body).toEqual({message: `Plant with ID 1 has been deleted`})
//         })
//     })
//   })

