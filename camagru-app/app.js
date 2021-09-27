const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mysql = require('mysql');
const { galleryRouter } = require('./routes');
const { galleryController } = require('./controllers');
const { dbConfig } = require('./config');

dotenv.config();

const connection = mysql.createConnection({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB_NAME,
	port: dbConfig.PORT,
});

const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

app.get('/', galleryController.find);

app.use('/gallery', galleryRouter);

app.use((req, res, next) => {
	res.status(404);

	// respond with html page
	if (req.accepts('html')) {
		res.render('404', { url: req.url });
		return;
	}

	// respond with json
	if (req.accepts('json')) {
		res.json({ error: 'Not found' });
		return;
	}

	// default to plain-text. send()
	res.type('txt').send('Not found');
});

module.exports = app;
