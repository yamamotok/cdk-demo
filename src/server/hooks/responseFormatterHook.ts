import fastifyPlugin from 'fastify-plugin';

export const responseFormatterHook = fastifyPlugin(async (server, opts) => {
  server.addHook('preSerialization', async (req, reply, payload) => {
    if (typeof payload === 'boolean') {
      return { success: payload };
    }
    return payload;
  });
});
