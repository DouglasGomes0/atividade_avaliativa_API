"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//arquivo que vai conter todas as rotas
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const pokemon_routes_1 = __importDefault(require("./pokemon.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
// import Logger from '../config/logger';
//import { login } from '../controllers/auth.controller';
const router = (0, express_1.Router)();
// Rota de Health Check
router.get('/health', (req, res) => {
    //   Logger.info('Alguém verificou o estado da API!');
    res.status(200).json({ status: 'OK', message: 'API a correr perfeitamente.' });
});
router.use('/users', user_routes_1.default);
router.use('/pokemon', pokemon_routes_1.default);
router.use(auth_routes_1.default);
exports.default = router;
