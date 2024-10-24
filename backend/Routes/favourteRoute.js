import express from 'express';
import { getFavorites,addFavorite, removeFavorite } from "../controllers/favouriteController.js";
import { authMiddleware } from '../authMiddleware/authmiddleware.js';

const router =express.Router()
router.get('/list',authMiddleware,getFavorites);
router.post('/add',authMiddleware,   addFavorite);
router.delete('/:id',authMiddleware,   removeFavorite);
router.get('/:id',authMiddleware,   removeFavorite);


export  default router;


