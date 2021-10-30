const mysql = require('mysql2');

const { dbConfig } = require('../config');

module.exports = class Database {
	constructor() {
		this.connection = mysql.createConnection({
			host: dbConfig.HOST,
			user: dbConfig.USER,
			password: dbConfig.PASSWORD,
			database: dbConfig.DB_NAME,
			port: dbConfig.PORT,
		});
	}

	async query(queryString, queryOptions = []) {
		return new Promise((resolve, reject) => {
			this.connection.execute(queryString, queryOptions, (err, result) => {
				if (err) {
					return reject(err);
				}

				return resolve(result);
			});
		});
	}
};
