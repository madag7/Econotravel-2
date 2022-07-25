import Router from 'express';
import loginController from '../controller/loginController';
import auth from '../middleware/auth';
import jwt from '../middleware/jwt';

const router = Router();

router.post('/login', auth.validateUser, jwt.generateToken, loginController);

export default router; 