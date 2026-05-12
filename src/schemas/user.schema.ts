import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'O campo "nome" é obrigatório')
      .min(3, 'O campo "nome" deve ter pelo menos 3 caracteres'),

    email: z
      .string()
      .min(1, 'O campo "email" é obrigatório')
      .email('O campo "email" deve ser um email válido'),

    password: z
      .string()
      .min(1, 'O campo "senha" é obrigatório')
      .min(6, 'O campo "senha" deve ter pelo menos 6 caracteres'),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(3, 'O nome deve ter no mínimo 3 caracteres')
      .optional(),

    email: z
      .string()
      .email('O email deve ser válido')
      .optional(),
  }),
});