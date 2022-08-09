import 'source-map-support/register';

import awsLambdaFastify from '@fastify/aws-lambda';
import { config as dotenvConfig } from 'dotenv';
import path from 'path';

import { createServer } from './createServer';

// Only for local env
dotenvConfig({ path: path.resolve(__dirname, `../.env`) });

const app = createServer({
  logger: {
    level: 'info',
  },
  disableRequestLogging: true, // request logs are too many.
});

// No need to start the server when it is on Lambda:
if (process.env.LOCAL) {
  const start = async () => {
    const port = process.env.SERVER_PORT || 3000;
    try {
      await app.listen(port);
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };
  start();
}

const proxy = awsLambdaFastify(app);
export const handler = proxy;
