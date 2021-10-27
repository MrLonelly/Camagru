const mysql = require('mysql2');
const { dbConfig } = require('../config');
const { sql: userSql } = require('./users-migration');

const connection = mysql.createConnection({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB_NAME,
	port: dbConfig.PORT,
});

connection.connect();

// Instantiate User table
connection.query('DROP TABLE IF EXISTS users;');
connection.query(userSql);

connection.end();
