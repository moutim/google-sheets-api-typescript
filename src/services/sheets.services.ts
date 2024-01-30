import { SheetsRow } from '../interfaces/Sheets';
import models from '../models/sheets.models';

const readSheetsRow = async (): Promise<SheetsRow | undefined | null> => {
  const readSheetsRow = await models.readSheetsRow();

  return readSheetsRow;
};

export default {
  readSheetsRow,
};