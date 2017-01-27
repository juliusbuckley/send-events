import app from '../app.js';
import request from 'supertest';
import { expect } from 'chai';

describe('events test', () => {
  it('expect GET /events to return 200', (done) => {
    request(app)
      .get('/events')
      .expect(200, done);
  });
});