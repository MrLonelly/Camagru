const express = require('express');
const path = require('path');
const { galleryRouter } = require('./routes');
const { GalleryController } = require('./controllers');

const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

app.get('/', GalleryController.find);

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

	next();
});

module.exports = app;
