import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { prisma } from '../lib/prisma';

export const loginUser = async (
  email: string,
  password: string
) => {

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('Email ou senha inválidos');
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error('Email ou senha inválidos');
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },

    process.env.JWT_SECRET as string,

    {
      expiresIn: '1d',
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};