const mysql = require('mysql2');
const { dbConfig } = require('../config');

const { sql: userSql } = require('./users-seed');
const { sql: commentsSql } = require('./comments-seed');
const { sql: imagesSql } = require('./images-seed');
const { sql: settingsSql } = require('./user-settings-seed');

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

connection.query(commentsSql);

connection.query(imagesSql);

connection.query(settingsSql);

connection.end();
