import { Request, Response, NextFunction } from "express";
import  Jwt  from "jsonwebtoken";
import Logger from "../config/logger";


// Vamos criar um interface para o TypeScript saber que o request
//agora poder ter um userId

export interface AuthRequest extends Request {
    userId?: number;
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token de autenticação não fornecido.' });
    }
    //Separa o "Bearer" do token
    const [, token] = authHeader.split(' ');

    try {
        const decoded = Jwt.verify(token, process.env.JWT_SECRET as string) as { id: number };
        
        req.userId = decoded.id;
        return next();
    }catch (error) {
       Logger.error(`Token de autenticação inválido: ${error}`);
        return res.status(401).json({ error: 'Token de autenticação inválido' });
    }
}