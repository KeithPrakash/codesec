import {register} from "../controllers/userController.js";
import express from 'express';

const router = express.Router();

router.get('/user',register);


export default router;