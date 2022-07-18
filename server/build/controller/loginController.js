"use strict";
exports.__esModule = true;
var loginController = function (req, res) {
    res.json({ token: req.body.token, rol: req.body.rol });
};
exports["default"] = loginController;
