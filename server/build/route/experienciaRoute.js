"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var experienciaController_1 = __importDefault(require("../controller/experienciaController"));
var router = (0, express_1.Router)();
router.get('/experiencias', experienciaController_1["default"].getAllExperiences);
router.get('/experiencias/:experiencia_id', experienciaController_1["default"].getOneExperience);
router.post('/experiencias', experienciaController_1["default"].saveExperiencia);
router.put('/experiencias/:experiencia_id', experienciaController_1["default"].modifExperience);
exports["default"] = router;
