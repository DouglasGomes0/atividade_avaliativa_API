import { Router } from 'express';
import {create,list,update,remove,getById,} from '../controllers/pokemon.controller';
import { validate } from '../middlewares/validate.middleware';
import {createPokemonSchema,updatePokemonSchema} from '../schemas/pokemon.schema';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Publica
router.get('/', list);
router.get('/:id', getById);

// Privadas
router.post('/',authenticate,validate(createPokemonSchema),create);
router.put('/:id',authenticate,validate(updatePokemonSchema),update);
router.delete('/:id',authenticate,remove);

export default router;