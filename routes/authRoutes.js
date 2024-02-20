import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/auth/login', loginUser);
router.post('/auth/register', registerUser);

export default router;
