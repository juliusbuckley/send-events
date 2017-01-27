import app from '../app.js';
import request from 'supertest';
import { expect } from 'chai';

describe('GET /test', () => {
  it('should return 200 to confirm events are sent to amplitude', done => {
    request(app)
      .get('/test')
      .expect(200, done);
  });
});