import Router from 'express';
import userController from '../controller/userController';
import admin from '../middleware/admin';
import  {encryptPassword}  from '../middleware/auth';
import jwt from '../middleware/jwt';

const router = Router();

router.get('/user', jwt.validateToken, admin.checkRol, userController.getAllUsers)
router.post('/user', encryptPassword, userController.saveUser);


export default router


