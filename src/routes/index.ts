//arquivo que vai conter todas as rotas
import { Router } from 'express';
import userroutes from './user.routes';
import pokemonroutes from './pokemon.routes';
import authRoutes from './auth.routes';

// import Logger from '../config/logger';
 //import { login } from '../controllers/auth.controller';

const router = Router();

// Rota de Health Check
router.get('/health', (req, res) => {
//   Logger.info('Alguém verificou o estado da API!');
  res.status(200).json({ status: 'OK', message: 'API a correr perfeitamente.' });
});

 router.use('/users', userroutes);
 router.use('/pokemon', pokemonroutes);
 router.use(authRoutes);


export default router;