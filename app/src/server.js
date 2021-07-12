const fastify = require('fastify')({ logger: true });
const multer = require('fastify-multer');
const { serverConfig } = require('./config');
const imageRoute = require('./imagesRoutes');

fastify.register(multer.contentParser);
fastify.register(imageRoute);
const start = async () => {
  try {
    await fastify.listen(serverConfig.PORT, '0.0.0.0');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
