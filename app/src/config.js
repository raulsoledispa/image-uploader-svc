require('dotenv').config();

const serverConfig = {
  PORT: process.env.PORT || 3000,
};

const cdnConfig = {
  account: process.env.ACCOUNT,
  key: process.env.KEY,
  secret: process.env.SECRET,
};

module.exports = { serverConfig, cdnConfig };
