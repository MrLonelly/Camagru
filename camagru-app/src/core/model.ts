import { Database } from './database';

export class Model extends Database {
	private modelName: string;

	private tableName: string;

	constructor(modelName: string, tableName: string) {
		super();
		this.modelName = modelName;
		this.tableName = tableName;
	}

	async findAll(options: string[] = []) {
		return this.query(`SELECT * FROM ${this.tableName} ${options.join(' ')}`, []);
	}
};
