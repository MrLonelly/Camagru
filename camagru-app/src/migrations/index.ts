import mysql from 'mysql2';
import { dbConfig } from '../config';
import { sql as userSql } from './users-migration';
import { sql as imageSql } from './images-migration';
import { sql as commentSql } from './comments-migration';
import { sql as userSettingSql } from './user-settings-migration';

const connection = mysql.createConnection({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB_NAME,
	port: dbConfig.PORT,
});

connection.connect();

// Drop old tables
connection.query('DROP TABLE IF EXISTS images;');
connection.query('DROP TABLE IF EXISTS settings;');
connection.query('DROP TABLE IF EXISTS comments;');
connection.query('DROP TABLE IF EXISTS users;');

// Instantiate User table
connection.query(userSql);

// Instantiate Comments table
connection.query(commentSql);

// Instantiate Image table
connection.query(imageSql);

// Instantiate Settings table
connection.query(userSettingSql);

connection.end();
