import { Request, Response } from 'express';
import { loginUser } from '../services/auth.service';

export const login = async (
  req: Request,
  res: Response
) => {

  try {
    const { email, password } = req.body;
    const result = await loginUser(
      email,
      password
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(401).json({
      error: 'Email ou senha inválidos',
    });
  }
};