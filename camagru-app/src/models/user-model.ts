import { Model } from '../core';

export class UserModel extends Model {
	static id = 'id';

	static email = 'email';

	static username = 'username';

	static password = 'password';

	static role = 'role';

	static createdAt = 'created_at';

	static updatedAt = 'updated_at';

	constructor() {
		super('User', 'users');
	}

	getUsers() {
		return this.findAll();
	}

	getCommonUsers() {
		return this.findAll([`WHERE ${UserModel.role} = 'user'`]);
	}
};
