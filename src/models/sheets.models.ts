const { google } = require("googleapis");
import { AuthSheets, SheetsRow } from "../interfaces/Sheets";

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

const readSheetsRow = async (): Promise<SheetsRow | undefined | null> => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "engenharia_de_software"
  });

  const numRows = getRows.data.values ? getRows.data.values.length : 0;

  return {
    numRows,
    rowsValue: getRows.data.values as string[][]
  };
};

export default {
  readSheetsRow,
  getAuthSheets
}
