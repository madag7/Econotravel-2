import { Router } from "express";
import experienciaController from "../controller/experienciaController";

const router = Router();

router.get('/experiencias', experienciaController);

export default router;