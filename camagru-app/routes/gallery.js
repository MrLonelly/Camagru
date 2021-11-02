const express = require('express');

const { GalleryController } = require('../controllers');

const router = express.Router();

router
	.get('/', GalleryController.find)
	.get('/:id', GalleryController.get)
	.post('/:id', GalleryController.post)
	.delete('/:id', GalleryController.delete);

module.exports = router;
