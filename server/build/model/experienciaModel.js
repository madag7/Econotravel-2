"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var database_service_1 = __importDefault(require("../services/database.service"));
var Experiencia = /** @class */ (function () {
    function Experiencia() {
    }
    Experiencia.prototype.getExperiences = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryStr, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryStr = 'SELECT * FROM experiencias;';
                        console.log(queryStr);
                        return [4 /*yield*/, database_service_1["default"].query(queryStr, [])];
                    case 1:
                        result = _a.sent();
                        console.log(result.rows);
                        return [2 /*return*/, result.rows];
                }
            });
        });
    };
    Experiencia.prototype.getOneExperience = function (experiencia_id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryStr, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryStr = 'SELECT * FROM experiencias WHERE experiencia_id=$1;';
                        return [4 /*yield*/, database_service_1["default"].query(queryStr, [experiencia_id])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.rows];
                }
            });
        });
    };
    Experiencia.prototype.saveExperiencia = function (exp) {
        return __awaiter(this, void 0, void 0, function () {
            var queryStr, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryStr = 'INSERT INTO experiencias (img, titulo, descripcion, precio, duracion, accesibilidad, et_ubicacion, et_transporte,et_duracion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *';
                        return [4 /*yield*/, database_service_1["default"].query(queryStr, [exp.img, exp.titulo, exp.descripcion, exp.precio, exp.duracion, exp.accesibilidad, exp.et_ubicacion, exp.et_transporte, exp.et_duracion])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.rows];
                }
            });
        });
    };
    Experiencia.prototype.modifExperience = function (experiencia_id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryStr, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryStr = 'UPDATE experiencias SET (img, titulo, descripcion, precio, duracion, accesibilidad, et_ubicacion, et_transporte,et_duracion) = ($1,$2,$3,$4,$5,$6,$7,$8,$9)  WHERE experiencia_id = $1 RETURNING *';
                        return [4 /*yield*/, database_service_1["default"].query(queryStr, [experiencia_id.img, experiencia_id.titulo, experiencia_id.descripcion, experiencia_id.precio, experiencia_id.duracion, experiencia_id.accesibilidad, experiencia_id.et_ubicacion, experiencia_id.et_transporte, experiencia_id.et_duracion, experiencia_id])];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/, result.rows];
                }
            });
        });
    };
    return Experiencia;
}());
exports["default"] = new Experiencia();
