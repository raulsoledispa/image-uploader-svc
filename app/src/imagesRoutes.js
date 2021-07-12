const multer = require('fastify-multer');
const cloudinary = require('cloudinary');
const { cdnConfig } = require('./config');

const upload = multer({ dest: './uploads' });
// eslint-disable-next-line no-unused-vars
function imagesRoutes(fastify, options, done) {
  fastify.post(
    '/api/images/upload',
    {
      preHandler: upload.single('image'),
    },
    async (req, reply) => {
      fastify.log.info(req.file);
      const { originalname } = req.file;
      fastify.log.info(`saving ${originalname}`);
      cloudinary.config({
        cloud_name: cdnConfig.account,
        api_key: cdnConfig.key,
        api_secret: cdnConfig.secret,
      });
      try {
        // eslint-disable-next-line spaced-comment
        /*  const uploadStream =  cloudinary.v2.uploader.upload_stream({
        tags: 'images',
      }, (err,resp) => {
        if(err) fastify.log.error(err)
        fastify.log.info(resp)
      });
      fs.createReadStream(req.file.buffer).pipe(uploadStream);
      fastify.log.info(uploadStream);*/

        const { secure_url: url } = await cloudinary.v2.uploader.upload(req.file.path);
        fastify.log.info(`image storaged in ${url}`);
        reply.send({ code: 200, status: 'OK', url });
      } catch (error) {
        fastify.log.error(error);
      }
    }
  );

  done();
}

module.exports = imagesRoutes;
