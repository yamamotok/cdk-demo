import {FastifyPluginAsync} from 'fastify';

export const helloRoute: FastifyPluginAsync = async (server) => {
  server.get('/hello', async (req, reply) => {
    const res = { message: 'Hello World!' };
    reply.send(res);
  });

  server.get('/hello-boolean', async (req, reply) => {
    reply.send(true);
  });
};
