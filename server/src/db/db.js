// eslint-disable-next-line import/no-extraneous-dependencies
const { MongoClient } = require('mongodb');
const { logger } = require('../utils');

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/camagru';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectToDB = async () => {
  try {
    await client.connect();
    logger.info('connected to db');
  } catch (err) {
    logger.error(err);
  }
};

module.exports = {
  client,
  connectToDB,
};
