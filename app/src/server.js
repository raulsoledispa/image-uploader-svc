const fastify = require('fastify')({ logger: true });

fastify.get('/api/images', async (req, reply) => ({ data: [] }));
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
