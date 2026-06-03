"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../lib/prisma");
const loginUser = async (email, password) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new Error('Email ou senha inválidos');
    }
    const passwordMatch = await bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Email ou senha inválidos');
    }
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
    }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    };
};
exports.loginUser = loginUser;
