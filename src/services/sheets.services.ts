import { CreateStudent, Student, UpdatedSheets } from '../interfaces/Sheets';
import models from '../models/sheets.models';

const readSheetsRow = async (): Promise<Student[]> => {
  const readSheetsRow = await models.readSheetsRow();

  return readSheetsRow;
};

const createStudent = async (studentInfo: CreateStudent): Promise<UpdatedSheets> => {
  const result = await models.addSheetsRow(studentInfo);

  return result;
};

const verifyStatus = (absences: number, avarage: number): string => {
  if (absences > 15) return 'Reprovado por Falta';
  if (avarage < 50) return 'Reprovado por Nota';
  if (avarage > 50 && avarage < 70) return 'Exame Final';
  return 'Aprovado'
};

const calculateAvarage = async (): Promise<UpdatedSheets> => {
  const { googleSheets, auth, spreadsheetId } = await models.getAuthSheets();

  const data = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "engenharia_de_software"
  });

  const rows: string[][] | null | undefined = data.data.values;

  rows?.forEach((item, index) => {
    if (index > 2 && item.length <= 6) {
      const avarage: number = Math.ceil((Number(item[3]) + Number(item[4]) + Number(item[5])) / 3);

      const absences: number = Number(item[2]);

      const messageStatus = verifyStatus(absences, avarage);

      if (messageStatus == 'Exame Final') {
        item.push(messageStatus);

        const finalScoreToApproval = (avarage + (avarage - 70)) / 2;

        item.push(finalScoreToApproval.toString());

        rows[index] = item;
        return;
      }

      item.push(messageStatus);
      item.push('0');
      rows[index] = item;

      return;
    }
  });

  const result = await models.calculateAvarage(rows);

  return result;
};

export default {
  readSheetsRow,
  createStudent,
  calculateAvarage
};