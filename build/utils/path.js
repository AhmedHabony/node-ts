"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
exports.default = path_1.default.dirname((process === null || process === void 0 ? void 0 : process.mainModule) ? process.mainModule.filename : '');
