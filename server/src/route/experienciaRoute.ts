import { Router } from "express";
import experienciaController from "../controller/experienciaController";
import admin from '../middleware/admin';
import jwt from '../middleware/jwt';

const router = Router();

router.get('/experiencias', experienciaController.getAllExperiences);
router.get('/experiencias/:experiencia_id', experienciaController.getOneExperience);
router.post('/admin/experiencias', jwt.validateToken, admin.checkRol, experienciaController.saveExperience)
router.put('/admin/experiencias/:experiencia_id', jwt.validateToken, admin.checkRol, experienciaController.modifExperience)
router.delete('/admin/experiencias/:experiencia_id', jwt.validateToken, admin.checkRol, experienciaController.deleteExperience)

export default router;