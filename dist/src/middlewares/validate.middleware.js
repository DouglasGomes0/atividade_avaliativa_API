"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const logger_1 = __importDefault(require("../config/logger"));
// Função que recebe um schema do Zod e retorna um middleware
const validate = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params
        });
        return next();
    }
    catch (error) {
        logger_1.default.warn('Tentativa de envio de dados invalidos barrada pelo zod.');
        // o Zod devolve um array de erros detalhad, vamos enviar isso para o cliente
        return res.status(400).json({
            error: 'Dados de entrada invalidos.',
            details: error.errors
        });
    }
};
exports.validate = validate;
