const path = require('path');
const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'API to manipulate Google Sheets.',
      description: 'This API manipulates a spreadsheet through the Google Sheets API.',
      version: '1.0',
    },
    servers: [
      { url: 'http://localhost:3001/', description: 'Development environment' },
    ],
  },
  apis: [
    path.resolve(__dirname, '../routes/sheets.routes.ts'),
    path.resolve(__dirname, '../routes/sheets.routes.js')
  ],
};

module.exports = swaggerConfig;
