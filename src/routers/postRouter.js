import express from 'express'
import { createPostController } from '../controllers/post/createPostController.js';
import { deletePostController } from '../controllers/post/deletePostController.js';
import { getPostController } from '../controllers/post/getPostController.js';
import { updatePostController } from '../controllers/post/updatePostController.js';
import { updatePostTextController } from '../controllers/post/updatePostTextController.js';

const router =  express.Router();

router.get('/', getPostController);
router.post('/', createPostController);
router.put('/', updatePostController);
router.patch('/', updatePostTextController);
router.delete('/', deletePostController);

export default router;
