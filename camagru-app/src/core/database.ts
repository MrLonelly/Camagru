const mysql = require('mysql2');

const { dbConfig } = require('../config');

export class Database {
	private connection;

	constructor() {
		this.connection = mysql.createConnection({
			host: dbConfig.HOST,
			user: dbConfig.USER,
			password: dbConfig.PASSWORD,
			database: dbConfig.DB_NAME,
			port: dbConfig.PORT,
		});
	}

	async query(query: string, queryOptions = []) {
		return new Promise((resolve, reject) => {
			this.connection.execute(query, queryOptions, (err: Error, result: any) => {
				if (err) {
					return reject(err);
				}

				return resolve(result);
			});
		});
	}
};
