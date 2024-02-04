import { Request, Response } from 'express';
import services from '../services/sheets.services';
import { StatusCodes } from 'http-status-codes';

const getSheetsRow = async (req: Request, res: Response) => {
  const rows = await services.readSheetsRow();

  return res.status(StatusCodes.OK).json(rows);
};

const createStudent = async (req: Request, res: Response) => {
  const rows = await services.createStudent(req.body);

  return res.status(StatusCodes.CREATED).json(rows);
};

const calculateAverage = async (req: Request, res: Response) => {
  const rows = await services.calculateAverage();

  return res.status(StatusCodes.OK).json(rows);
};


export default {
  getSheetsRow,
  createStudent,
  calculateAverage
}
