const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/dbConfig.js');

describe('POST to /register', () => {
    it('Returns in JSON format', async () => {
      const res = await request(server)
        .post('/api/auth/register')
        .send({ username: "test", password: "testing", phoneNumber: '123123' });
      expect(res.type).toBe('application/json');
    });
  
    it('Returns in JSON format', async () => {
      await request(server)
        .post('/api/auth/register')
        .send({ username: 'test', password: 'testing', phoneNumber: '123123' })
      expect(200);
    });
  });
  
  describe('POST to /login', () => {
    it('Returns 200 OK', async () => {
      const res = await request(server)
        .post('/api/auth/login')
        .send({ username: 'test', password: 'testing', phoneNumber: '123123' });
      expect(res.status).toBe(200);
    });
  
    it('Generates token', async () => {
      const res = await request(server)
        .post('/api/auth/login')
        .send({ username: 'test', password: 'testing', phoneNumber: '123123' });
      expect(res.body.token).toBeDefined();
    });
  });