import { Request, Response } from "express";

import { Controller } from '../core/controller';
import { UserModel } from '../models';

export class GalleryController extends Controller {
	public static async find(req: Request, res: Response) {
		const userModel = new UserModel();

		const users = await userModel.getUsers();
		const commonUsers = await userModel.getCommonUsers();
		console.log(users, commonUsers);

		res.render('index');
	};
};
