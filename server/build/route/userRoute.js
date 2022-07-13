"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userController_1 = __importDefault(require("../controller/userController"));
var auth_1 = require("../middleware/auth");
var jws_1 = __importDefault(require("../middleware/jws"));
var router = (0, express_1["default"])();
router.get('/user', jws_1["default"].validateToken, userController_1["default"].getAllUsers);
router.post('/user', auth_1.encryptPassword, userController_1["default"].saveUser);
exports["default"] = router;
