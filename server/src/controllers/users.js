const { usersService } = require('../services');

const getAll = async (req, res) => {
  const users = await usersService.getAll();

  res.json(users);
};

module.exports = {
  getAll,
};
