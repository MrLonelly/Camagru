const Database = require('./database');

module.exports = class Model extends Database {
	constructor(modelName, tableName) {
		super();
		this.modelName = modelName;
		this.tableName = tableName;
	}

	async findAll(options = []) {
		return this.query(`SELECT * FROM ${this.tableName} ${options.join(' ')}`, []);
	}
};
