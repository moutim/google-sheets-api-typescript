import { sheets_v4 } from "googleapis";

export interface AuthSheets {
  auth: string;
  client: Object;
  googleSheets: sheets_v4.Sheets;
  spreadsheetId: string;
}

export interface SheetsRow {
  numRows: number;
  rowsValue: String[][];
}