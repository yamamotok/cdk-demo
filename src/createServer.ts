import fastifyServer, { FastifyInstance } from 'fastify';
import {responseFormatterHook} from './server/hooks/responseFormatterHook';
import {helloRoute} from './server/helloRoute';

export function createServer(opts?: Parameters<typeof fastifyServer>[0]): FastifyInstance {
  const server = fastifyServer(opts);

  // Fastify hooks
  server.register(responseFormatterHook);

  // Register routes
  let prefix: string | undefined = undefined;
  if (process.env.PATH_PREFIX) {
    prefix = String(process.env.PATH_PREFIX);
  }
  server.register(helloRoute, { prefix });

  return server;
}
