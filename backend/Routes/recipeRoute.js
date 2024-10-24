import express from 'express';
import { getByCategory} from "../controllers/CategoryController.js";


const router =express.Router()

router.get('/:id',  getByCategory);

export  default router;
