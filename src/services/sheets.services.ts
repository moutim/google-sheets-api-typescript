import { CreateStudent, Student } from '../interfaces/Sheets';
import models from '../models/sheets.models';

const readSheetsRow = async (): Promise<Student[]> => {
  const readSheetsRow = await models.readSheetsRow();

  return readSheetsRow;
};

const createStudent = async (studentInfo: CreateStudent) => {
  const result = await models.addSheetsRow(studentInfo);

  return result;
};

export default {
  readSheetsRow,
  createStudent
};