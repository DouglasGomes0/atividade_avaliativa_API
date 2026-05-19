import { Router } from 'express';
import {create,list,update,remove,getById} from '../controllers/user.controller';
import { validate } from '../middlewares/validate.middleware';
import {createUserSchema,updateUserSchema} from '../schemas/user.schema';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Pública
router.post('/',validate(createUserSchema),create);

// Privadas
router.get('/',authenticate,list);
router.get('/:id',authenticate,getById);
router.put('/:id',authenticate,validate(updateUserSchema),update);
router.delete('/:id',authenticate,remove);

export default router;