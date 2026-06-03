"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
// Define níveis de log e cores
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};
winston_1.default.addColors(colors);
// Formatação customizada
const format = winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
// Onde os logs serão salvos
const transports = [
    // Log de erros no console
    new winston_1.default.transports.Console(),
    // Salvar todos os erros em um arquivo separado
    new winston_1.default.transports.File({
        filename: 'logs/error.log',
        level: 'error',
    }),
    // Salvar todos os logs em um arquivo geral
    new winston_1.default.transports.File({ filename: 'logs/all.log' }),
];
const Logger = winston_1.default.createLogger({
    level: 'debug', // Captura de debug para cima
    levels,
    format,
    transports,
});
exports.default = Logger;
