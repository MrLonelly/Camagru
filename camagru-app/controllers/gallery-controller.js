const Controller = require('../core/controller');
const { UserModel } = require('../models');

module.exports = class GalleryController extends Controller {
	find = async (req, res) => {
		const userModel = new UserModel();

		const users = await userModel.getUsers();
		const commonUsers = await userModel.getCommonUsers();

		console.log(users, commonUsers);

		res.render('index');
	};
};
