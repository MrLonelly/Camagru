import mysql from 'mysql2';
import { dbConfig } from '../config';

import { sql as userSql } from './users-seed';
import { sql as commentsSql } from './comments-seed';
import { sql as imagesSql } from './images-seed';
import { sql as settingsSql } from './user-settings-seed';

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
