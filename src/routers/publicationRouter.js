import express from 'express'
import { createPubliController } from '../controllers/publication/createPubliController.js';
import { deletePubliController } from '../controllers/publication/deletePubliController.js';
import { getPubliController } from '../controllers/publication/getPubliController.js';
import { updatePubliController } from '../controllers/publication/updatePubliController.js';
import { updatePubliTextController } from '../controllers/publication/updatePubliTextController.js';

const router =  express.Router();

router.get('/', getPubliController);
router.post('/', createPubliController);
router.put('/:id', updatePubliController);
router.patch('/:id', updatePubliTextController);
router.delete('/:id', deletePubliController);

export default router;
