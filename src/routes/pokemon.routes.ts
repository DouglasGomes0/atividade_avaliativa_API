import { Router } from 'express';

import {create,list,update,remove,getById,
} from '../controllers/pokemon.controller';
import { validate } from '../middlewares/validate.middleware';
import {createPokemonSchema,updatePokemonSchema} from '../schemas/pokemon.schema';

const router = Router();

router.post('/',validate(createPokemonSchema),create);
router.get('/', list);
router.put('/:id',validate(updatePokemonSchema),update);
router.delete('/:id', remove);
router.get('/:id', getById);

export default router;