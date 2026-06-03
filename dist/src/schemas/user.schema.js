"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(1, 'O campo "nome" é obrigatório')
            .min(3, 'O campo "nome" deve ter pelo menos 3 caracteres'),
        email: zod_1.z
            .string()
            .min(1, 'O campo "email" é obrigatório')
            .email('O campo "email" deve ser um email válido'),
        password: zod_1.z
            .string()
            .min(1, 'O campo "senha" é obrigatório')
            .min(6, 'O campo "senha" deve ter pelo menos 6 caracteres'),
    }),
});
exports.updateUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(3, 'O nome deve ter no mínimo 3 caracteres')
            .optional(),
        email: zod_1.z
            .string()
            .email('O email deve ser válido')
            .optional(),
    }),
});
