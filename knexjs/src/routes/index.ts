import { Router } from 'express';

import UserController from '../controlllers/UserController';

const userController = new UserController();

const router = Router();

router.get('/users', userController.index);
router.get('/users/:id', userController.show);
router.post('/users', userController.store);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

export default router;