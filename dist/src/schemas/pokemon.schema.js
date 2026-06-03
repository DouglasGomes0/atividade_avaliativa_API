"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePokemonSchema = exports.createPokemonSchema = void 0;
const zod_1 = require("zod");
exports.createPokemonSchema = zod_1.z.object({
    body: zod_1.z.object({
        nome: zod_1.z
            .string()
            .min(1, 'O nome é obrigatório'),
        numeroPokedex: zod_1.z
            .number()
            .int()
            .positive('O número da pokedex deve ser positivo'),
        peso: zod_1.z
            .number()
            .positive('O peso deve ser positivo'),
        altura: zod_1.z
            .number()
            .positive('A altura deve ser positiva'),
        tipo1Id: zod_1.z
            .number()
            .int()
            .positive('O tipo primário é obrigatório'),
        tipo2Id: zod_1.z
            .number()
            .int()
            .positive('O tipo secundário deve ser válido')
            .optional(),
    }),
});
exports.updatePokemonSchema = zod_1.z.object({
    body: zod_1.z.object({
        nome: zod_1.z
            .string()
            .min(1)
            .optional(),
        numeroPokedex: zod_1.z
            .number()
            .int()
            .positive()
            .optional(),
        peso: zod_1.z
            .number()
            .positive()
            .optional(),
        altura: zod_1.z
            .number()
            .positive()
            .optional(),
        tipo1Id: zod_1.z
            .number()
            .int()
            .positive()
            .optional(),
        tipo2Id: zod_1.z
            .number()
            .int()
            .positive()
            .optional(),
    }),
});
