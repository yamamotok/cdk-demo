import { config as dotenvConfig } from 'dotenv';
import path from 'path';

import { createServer } from './createServer';

dotenvConfig({ path: path.resolve(__dirname, `../.env`) });

const start = async () => {
  const app = createServer({
    logger: {
      level: 'debug',
      transport: {
        target: 'pino-pretty'
      },
    },
    disableRequestLogging: false,
  });

  const port = Number(process.env.SERVER_PORT) || 3000;
  try {
    await app.listen({port});
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
