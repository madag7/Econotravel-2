import { Router } from "express";
import experienciaController from "../controller/experienciaController";

const router = Router();

router.get('/experiencias', experienciaController.getAllExperiences);
router.get('/experiencias/:id', experienciaController.getOneExperience);

export default router;