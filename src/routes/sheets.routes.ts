import { Router } from 'express';
const { StatusCodes } = require('http-status-codes');
import controllers from '../controllers/sheets.controllers';

const sheetsRouter = Router();

sheetsRouter.get('/read/rows', controllers.getSheetsRow);

export default sheetsRouter;