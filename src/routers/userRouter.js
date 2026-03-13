import express from 'express';
import { getUsersController  } from '../controllers/user/getUsersController.js';
import { createUsersController } from '../controllers/user/createUsersController.js';
import { updateUsersController } from '../controllers/user/updateUsersController.js';
import { updateUsersAvatarController } from '../controllers/user/updateUsersAvatarController.js';
import { deleteUsersController } from '../controllers/user/deleteUsersController.js';

const router =  express.Router();

router.get('/', getUsersController);
router.post('/', createUsersController);
router.put('/', updateUsersController);
router.patch('/', updateUsersAvatarController);
router.delete('/', deleteUsersController);

export default router;