import express from 'express';
import { GalleryController } from '../controllers';

export const galleryRouter = express.Router();

galleryRouter
	.get('/', GalleryController.find)
	.get('/:id', GalleryController.get)
	.post('/:id', GalleryController.post)
	.delete('/:id', GalleryController.delete);
