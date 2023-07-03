const { Router } = require('express');
const { usersController } = require('../controllers');

const userRouter = Router();

userRouter
  .get('/', usersController.getAll);

module.exports = userRouter;
