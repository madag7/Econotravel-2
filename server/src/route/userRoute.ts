import Router from 'express';
import userController from '../controller/userController';
import  {encryptPassword}  from '../middleware/auth';
import jws from '../middleware/jws';

const router = Router();

router.get('/users/all', jws.validateToken, userController.getAllUsers)
router.post('/users', encryptPassword, userController.saveUser);

export default router