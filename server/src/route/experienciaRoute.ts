import { Router } from "express";
import experienciaController from "../controller/experienciaController";
import admin from '../middleware/admin';
import jwt from '../middleware/jwt';

const router = Router();

router.get('/experiencias', experienciaController.getAllExperiences);
router.get('/experiencias/:experiencia_id', experienciaController.getOneExperience);
router.post('/experiencias', jwt.validateToken, admin.checkRol, experienciaController.saveExperience)
router.put('/experiencias/:experiencia_id', jwt.validateToken, admin.checkRol, experienciaController.modifExperience)
router.delete('/experiencias/:experiencia_id', jwt.validateToken, admin.checkRol, experienciaController.deleteExperience)

export default router;