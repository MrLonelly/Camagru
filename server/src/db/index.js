const { client, connectToDB } = require('./db');

module.exports = {
  dbClient: client,
  connectToDB,
};
