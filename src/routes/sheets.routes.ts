import { Router } from 'express';
const { StatusCodes } = require('http-status-codes');
import controllers from '../controllers/sheets.controllers';
import verifyRegister from '../middlewares/createStudent';

const sheetsRouter = Router();

sheetsRouter.get('/read/students', controllers.getSheetsRow);

sheetsRouter.post('/create/students', verifyRegister, controllers.createStudent);

sheetsRouter.put('/calculate/avarage', controllers.calculateAverage);

export default sheetsRouter;