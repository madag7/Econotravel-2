import { Router } from "express";
import experienciaController from "../controller/experienciaController";

const router = Router();

router.get('/experiencias', experienciaController.getAllExperiences);
router.get('/experiencias/:experiencia_id', experienciaController.getOneExperience);
router.post('/experiencias', experienciaController.saveExperience)
router.put('/experiencias/:experiencia_id', experienciaController.modifExperience)
router.delete('/experiencias/:experiencia_id', experienciaController.deleteExperience)

export default router;