import { Request, Response } from 'express';
import services from '../services/sheets.services';

const getSheetsRow = async (req: Request, res: Response) => {
  const rows = await services.readSheetsRow();

  return res.status(200).json(rows);
};

const calculateAvarage = async (req: Request, res: Response) => {
  const rows = await services.calculateAvarage();

  return res.status(200).json(rows);
};


export default {
  getSheetsRow,
  calculateAvarage
}
