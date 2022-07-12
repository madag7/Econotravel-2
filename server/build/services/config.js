"use strict";
exports.__esModule = true;
exports.config = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var config = function () {
    var uri = process.env.DATABASE_URL;
    var secret = process.env.SECRET;
    return {
        uri: uri,
        secret: secret
    };
};
exports.config = config;
