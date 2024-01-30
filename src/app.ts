import express from 'express';
import cors from 'cors';
import * as middlewares from './middlewares/middlewares';
import MessageResponse from './interfaces/MessageResponse';
import sheetsRouter from './routes/sheets.routes';
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
require('express-async-errors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(sheetsRouter);

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
