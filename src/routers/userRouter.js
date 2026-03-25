import express from 'express';
import { getUsersController  } from '../controllers/user/getUsersController.js';
import { createUsersController } from '../controllers/user/createUsersController.js';
import { updateUsersController } from '../controllers/user/updateUsersController.js';
import { updateUsersAvatarController } from '../controllers/user/updateUsersAvatarController.js';
import { deleteUsersController } from '../controllers/user/deleteUsersController.js';

const router =  express.Router();

router.get('/', getUsersController);
router.post('/', createUsersController);
router.put('/:id', updateUsersController);
router.patch('/:id', updateUsersAvatarController);
router.delete('/:id', deleteUsersController);

export default router;