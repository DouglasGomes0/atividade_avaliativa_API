import { z } from 'zod';

export const createPokemonSchema = z.object({
  body: z.object({
    nome: z
      .string()
      .min(1, 'O nome é obrigatório'),

    numeroPokedex: z
      .number()
      .int()
      .positive('O número da pokedex deve ser positivo'),

    peso: z
      .number()
      .positive('O peso deve ser positivo'),

    altura: z
      .number()
      .positive('A altura deve ser positiva'),

    tipo1Id: z
      .number()
      .int()
      .positive('O tipo primário é obrigatório'),

    tipo2Id: z
      .number()
      .int()
      .positive('O tipo secundário deve ser válido')
      .optional(),
  }),
});

export const updatePokemonSchema = z.object({
  body: z.object({
    nome: z
      .string()
      .min(1)
      .optional(),

    numeroPokedex: z
      .number()
      .int()
      .positive()
      .optional(),

    peso: z
      .number()
      .positive()
      .optional(),

    altura: z
      .number()
      .positive()
      .optional(),

    tipo1Id: z
      .number()
      .int()
      .positive()
      .optional(),

    tipo2Id: z
      .number()
      .int()
      .positive()
      .optional(),
  }),
});