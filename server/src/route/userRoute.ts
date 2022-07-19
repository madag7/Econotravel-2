import Router from 'express';
import userController from '../controller/userController';
import admin from '../middleware/admin';
import  {encryptPassword}  from '../middleware/auth';
import jws from '../middleware/jws';

const router = Router();

router.get('/user', jws.validateToken, admin.checkRol, userController.getAllUsers)
router.post('/user', encryptPassword, userController.saveUser);


export default router