import express from 'express'
import { createPubliController } from '../controllers/publication/createPubliController.js';
import { deletePubliController } from '../controllers/publication/deletePubliController.js';
import { getPubliController } from '../controllers/publication/getPubliController.js';
import { updatePubliController } from '../controllers/publication/updatePubliController.js';
import { updatePubliTextController } from '../controllers/publication/updatePubliTextController.js';

const router =  express.Router();

router.get('/', getPubliController);
router.post('/', createPubliController);
router.put('/', updatePubliController);
router.patch('/', updatePubliTextController);
router.delete('/', deletePubliController);

export default router;
