"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.loginRoute = exports.userRoute = exports.experienciaRoute = void 0;
var experienciaRoute_1 = require("./experienciaRoute");
__createBinding(exports, experienciaRoute_1, "default", "experienciaRoute");
var userRoute_1 = require("./userRoute");
__createBinding(exports, userRoute_1, "default", "userRoute");
var loginRoute_1 = require("./loginRoute");
__createBinding(exports, loginRoute_1, "default", "loginRoute");
