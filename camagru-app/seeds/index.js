const mysql = require('mysql');
const { dbConfig } = require('../config');
const { sql: userSql } = require('./user-seed');

const connection = mysql.createConnection({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB_NAME,
	port: dbConfig.PORT,
});

connection.connect();

// Instantiate User table with default values
connection.query(userSql);

connection.end();
