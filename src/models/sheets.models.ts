const { google } = require("googleapis");
import { AuthSheets, SheetsRow, Student } from "../interfaces/Sheets";

const getAuthSheets = async (): Promise<AuthSheets> => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./src/models/credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });

  const spreadsheetId = "1FNNI45t6LVj7AMTtqXBHEYhh85fA69J4SO-PmrA40pc";

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
  };
};

const readSheetsRow = async (): Promise<Student[]> => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

  const result = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "engenharia_de_software"
  });

  const rows: string[][] | null | undefined = result.data.values;

  const students: Student[] = [];

  rows?.forEach((item, index) => {
    if (index > 2) {
      students.push({
        id: Number(item[0]),
        name: item[1],
        studyArea: rows[0][0],
        absences: Number(item[2]),
        test1: Number(item[3]),
        test2: Number(item[4]),
        test3: Number(item[5]),
        status: item[6] || null,
        finalApprovalScore: Number(item[6]) || null,
      });
    }
  });

  return students;
};

// const addSheetsRow = async (values) => {
//   const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

//   const row = await googleSheets.spreadsheets.values.append({
//     auth,
//     spreadsheetId,
//     range: "Página1",
//     valueInputOption: "USER_ENTERED",
//     resource: {
//       values: values,
//     },
//   });
// };

export default {
  readSheetsRow,
  getAuthSheets
}
