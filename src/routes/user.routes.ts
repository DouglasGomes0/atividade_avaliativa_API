import { Router } from "express";
import {create, list, update, remove, getById} from '../controllers/user.controller'; 
import { validate } from "../middlewares/validate.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";
// import { authenticate } from "../middlewares/auth.middleware";
const router = Router();




  router.post('/', validate(createUserSchema), create);
 router.get('/', list);
 router.put('/:id', validate(updateUserSchema), update);
 router.delete('/:id', remove);
 router.get('/:id', getById);

 export default router;