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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.remove = exports.update = exports.list = exports.create = void 0;
const userService = __importStar(require("../services/user.service"));
const logger_1 = __importDefault(require("../config/logger"));
const create = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await userService.createrUser(name, email, password);
        logger_1.default.info(`Usuário ${user.name} criado com sucesso!`);
        res.status(201).json(user);
    }
    catch (error) {
        logger_1.default.error(`Erro ao criar usuário: ${error}`);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};
exports.create = create;
const list = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    }
    catch (error) {
        logger_1.default.error(`Erro ao listar usuários: ${error}`);
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
};
exports.list = list;
const update = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const user = await userService.updateUser(Number(id), { name, email });
        res.status(200).json(user);
    }
    catch (error) {
        logger_1.default.error(`Erro ao atualizar usuário: ${error}`);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};
exports.update = update;
const remove = async (req, res) => {
    const { id } = req.params;
    try {
        await userService.deleteUser(Number(id));
        res.status(200).json({ message: 'Usuário removido com sucesso!' });
    }
    catch (error) {
        logger_1.default.error(`Erro ao remover usuário: ${error}`);
        res.status(500).json({ error: 'Erro ao remover usuário' });
    }
};
exports.remove = remove;
const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        logger_1.default.error(`Erro ao buscar usuário por ID: ${error}`);
        res.status(500).json({ error: 'Erro ao buscar usuário por ID' });
    }
};
exports.getById = getById;
