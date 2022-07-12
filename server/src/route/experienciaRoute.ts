import { Router } from "express";
import experienciaController from "../controller/experienciaController";

const router = Router();

router.get('/experiencias', experienciaController.getAllExperiences);
router.get('/experiencias/:experiencia_id', experienciaController.getOneExperience);
router.post('/experiencias', experienciaController.saveExperiencia)

export default router;