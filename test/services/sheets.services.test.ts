import { describe, it } from 'mocha';
const sinon = require('sinon');
import { expect } from 'chai';
import service from '../../src/services/sheets.services';
import models from '../../src/models/sheets.models';
import { CreateStudent, Student, UpdatedSheets } from '../../src/interfaces/Sheets';

describe('Test functions in service', () => {
  it('readSheetsRow should return an array of students', async () => {
    const expectedStudents: Student[] = [
      {
        id: 1,
        name: 'Vitor Moutim',
        studyArea: 'Engenharia de Software',
        absences: 0,
        test1: 100,
        test2: 75,
        test3: 50,
        status: 'Aprovado',
        finalApprovalScore: 0
      }
    ];

    sinon.stub(models, 'readSheetsRow').resolves(expectedStudents);

    const result = await service.readSheetsRow();

    expect(result).to.deep.equal(expectedStudents);
  });

  it('createStudent should return an object with a message', async () => {
    const studentInfo: CreateStudent = {
      name: 'Vitor Moutim',
      absences: '2',
      test1: '100',
      test2: '75',
      test3: '50',
    };

    const expectedSheets: UpdatedSheets = {
      message: 'Student created successfully.'
    };

    sinon.stub(models, 'addSheetsRow').resolves(expectedSheets);

    const result = await service.createStudent(studentInfo);

    expect(result).to.deep.equal(expectedSheets);
  });

  it('verifyStatus should return "Reprovado por Falta" if absences > 15', () => {
    const absences = 20;
    const average = 80;

    const result = service.verifyStatus(absences, average);

    expect(result).to.equal('Reprovado por Falta');
  });

  it('verifyStatus should return "Reprovado por Nota" if average < 50', () => {
    const absences = 10;
    const average = 40;

    const result = service.verifyStatus(absences, average);

    expect(result).to.equal('Reprovado por Nota');
  });

  it('verifyStatus should return "Exame Final" if average > 50 and average < 70', () => {
    const absences = 5;
    const average = 60;

    const result = service.verifyStatus(absences, average);

    expect(result).to.equal('Exame Final');
  });

  it('verifyStatus should return "Aprovado" if none of the conditions are met', () => {
    const absences = 5;
    const average = 80;

    const result = service.verifyStatus(absences, average);

    expect(result).to.equal('Aprovado');
  });

  it('calculateAvarage should return an object with a message', async () => {
    const expectedSheets: UpdatedSheets = {
      message: 'Grade average updated successfully!'
    };

    const getAuthSheetsStub = sinon.stub(models, 'getAuthSheets').resolves({
      googleSheets: {
        spreadsheets: {
          values: {
            get: sinon.stub().resolves({
              data: {
                values: [
                  ['1', 'Vitor Moutim', '2', '100', '75', '50', 'Aprovado', '0'],
                  ['2', 'John Doe', '3', '90', '80', '70', 'Aprovado', '0'],
                  ['3', 'Jane Smith', '1', '60', '70', '80', 'Exame Final', '75']
                ]
              }
            })
          }
        }
      },
      auth: 'mocked-auth',
      spreadsheetId: 'mocked-spreadsheet-id'
    });

    const calculateAverageStub = sinon.stub(models, 'calculateAverage').resolves(expectedSheets);

    const result = await service.calculateAverage();

    expect(getAuthSheetsStub.calledOnce).to.be.true;
    expect(calculateAverageStub.calledOnce).to.be.true;
    expect(result).to.deep.equal(expectedSheets);
  });
});