const fastify = require('fastify')({ logger: true });
const serverConfig = require('./config');
fastify.get('/api/images', async (req, reply) => ({ data: [] }));
const start = async () => {
  try {
    await fastify.listen(serverConfig.PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
