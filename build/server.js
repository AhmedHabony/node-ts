"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config/config"));
var app = express_1.default();
app.listen(config_1.default.port, function () {
    console.log("Listening On Port: " + config_1.default.port);
});
