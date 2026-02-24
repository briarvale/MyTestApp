const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('responds with welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Welcome to Minou's App!");
  });
});

describe('GET /health', () => {
  it('responds with status OK and time', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('OK');
    expect(res.body.time).toBeDefined();
  });
});
