import Router from 'express';
import loginController from '../controller/loginController';
import auth from '../middleware/auth';
import jws from '../middleware/jws';

const router = Router();

router.post('/login', auth.validateUser, jws.generateToken, loginController);

export default router; 