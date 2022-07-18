"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var route_1 = require("./route");
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
app.use(route_1.experienciaRoute);
app.use(route_1.userRoute);
app.use(route_1.loginRoute);
exports["default"] = app;
