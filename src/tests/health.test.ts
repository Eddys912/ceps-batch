import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app } from '../app';

describe('Health Controller', () => {
  it('should return 200 and status ok', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
