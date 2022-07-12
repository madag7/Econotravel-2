"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var loginController_1 = __importDefault(require("../controller/loginController"));
var auth_1 = __importDefault(require("../middleware/auth"));
var jws_1 = __importDefault(require("../middleware/jws"));
var router = (0, express_1["default"])();
router.post('/login', auth_1["default"].validateUser, jws_1["default"].generateToken, loginController_1["default"]);
exports["default"] = router;
