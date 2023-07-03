const { dbClient, connectToDB } = require('../db');

const getAll = async () => {
  await connectToDB();

  const collection = dbClient.db().collection('users');
  const users = await collection.find().toArray();

  return users;
};

module.exports = {
  getAll,
};
