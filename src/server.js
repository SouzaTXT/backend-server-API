//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js';
import postRouter from './routers/publicationRouter.js';
import { logger } from './middleware/logger.js';

const app = express();
const port = 3000;

app.use(logger);
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Olá Mundo Express API!");
})

app.use('/user', userRouter);
app.use('/publication', postRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})