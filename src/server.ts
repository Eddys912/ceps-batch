import logger from '@config/logger';

import { env } from '@config/env';
import { app } from '@src/app';

const port = env.PORT;
const urlBase = env.URL_BASE;

app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
  logger.info(`Swagger UI available at ${urlBase}/api/docs`);
});
