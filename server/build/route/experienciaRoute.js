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
router.post('/experiencias', experienciaController_1["default"].saveExperience);
router.put('/experiencias/:experiencia_id', experienciaController_1["default"].modifExperience);
router["delete"]('/experiencias/:experiencia_id', experienciaController_1["default"].deleteExperience);
exports["default"] = router;
