import { Student } from '../interfaces/Sheets';
import models from '../models/sheets.models';

const readSheetsRow = async (): Promise<Student[]> => {
  const readSheetsRow = await models.readSheetsRow();

  return readSheetsRow;
};

const calculateAvarage = async () => {
  // const { googleSheets, auth, spreadsheetId } = await models.getAuthSheets();

  // const rows: SheetsRow | undefined | null = await models.readSheetsRow();

  // const totalClasses: number = Number(rows?.rowsValue[1][0].split(' ').pop());

  // const maxAbsences: number = totalClasses * 0.25;

  // rows?.rowsValue.forEach((item, index) => {
  //   if (index > 2) {
  //     const avarage: number = (Number(item[3]) + Number(item[4]) + Number(item[5])) / 3;

  //     if (Number(item[2]) > maxAbsences) {
  //       item.push('Reprovado por Falta');
  //       return;
  //     } else if (avarage < 5) {
  //       item.push('Reprovado por Nota');
  //       return;
  //     } else if (avarage >= 5 && avarage < 7) {
  //       const noteForApproval: number = (avarage + (avarage - 7)) / 2;
  //       item.push('Exame Final');
  //       item.push(noteForApproval.toString());
  //     } else {
  //       item.push('Aprovado');
  //       item.push('0');
  //     }
  //   }
  // });

  // const updatedRows = await googleSheets.spreadsheets.values.append({
  //   auth,
  //   spreadsheetId,
  //   range: "Página1",
  //   valueInputOption: "USER_ENTERED",
  //   resource: {
  //     values: rows,
  //   },
  // });

  // return updatedRows;
};

export default {
  readSheetsRow,
  calculateAvarage
};