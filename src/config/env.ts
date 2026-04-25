import logger from '@config/logger';

import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  URL_BASE: z.url().default('http://localhost:3000'),
  EXTERNAL_API_URL: z.url(),
  EXTERNAL_API_KEY: z.string().min(1).optional(),
  BANXICO_TIMEOUT: z.coerce.number().default(30000),
  PLAYWRIGHT_HEADLESS: z.coerce.boolean().default(true),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  logger.error({ error: _env.error }, 'Invalid environment variables');
  logger.error(z.treeifyError(_env.error));
  process.exit(1);
}

export const env = _env.data;
