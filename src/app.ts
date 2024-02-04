import express from 'express';
import cors from 'cors';
import * as middlewares from './middlewares/middlewares';
import sheetsRouter from './routes/sheets.routes';
require('dotenv').config();
require('express-async-errors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(sheetsRouter);

app.use(middlewares.notFound);

export default app;
