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

export interface Student {
  id: number;
  name: string;
  studyArea: string;
  absences: number;
  test1: number;
  test2: number;
  test3: number;
  status: string | null;
  finalApprovalScore: number | null;
}