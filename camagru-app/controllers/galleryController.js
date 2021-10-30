const { UserModel } = require('../models');

const galleryController = {};

galleryController.find = async (req, res) => {
	const userModel = new UserModel();

	const users = await userModel.getUsers();
	const commonUsers = await userModel.getCommonUsers();

	console.log(users, commonUsers);

	res.render('index');
};

module.exports = galleryController;
