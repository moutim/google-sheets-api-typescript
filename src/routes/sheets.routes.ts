import { Router } from 'express';
import controllers from '../controllers/sheets.controllers';
import verifyRegister from '../middlewares/createStudent';
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerJSONDoc = swaggerJSDoc(require('../docs/swagger.config'));

const sheetsRouter = Router();

sheetsRouter.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerJSONDoc));

sheetsRouter.get('/read/students', controllers.getSheetsRow);

sheetsRouter.post('/create/students', verifyRegister, controllers.createStudent);

sheetsRouter.put('/calculate/average', controllers.calculateAverage);

/**
 * @swagger
 *   /read/students:
 *     get:
 *       tags: [Students]
 *       description: Return data for all students entered in the spreadsheet
 *       responses:
 *         200:
 *           description: Data returned successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     name:
 *                       type: string
 *                     studyArea:
 *                       type: string
 *                     absences:
 *                       type: number
 *                     test1:
 *                       type: number
 *                     test2:
 *                       type: number
 *                     test3:
 *                       type: number
 *                     status:
 *                       type: string
 *                     finalApprovalScore:
 *                       type: number
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     StudentRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         absences:
 *           type: integer
 *         test1:
 *           type: integer
 *         test2:
 *           type: integer
 *         test3:
 *           type: integer
 *       required:
 *         - name
 *         - absences
 *         - test1
 *         - test2
 *         - test3
 *
 * /create/students:
 *   post:
 *     tags: [Students]
 *     description: Creates a new student in the spreadsheet.
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentRequest'
 *     responses:
 *       201:
 *         description: Student created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message indicating the success of the operation.
 *       400:
 *         description: Invalid request. Check the values ​​sent in the request body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message indicating invalid values ​​in the request body.
 */

/**
 * @swagger
 *   /calculate/average:
 *     put:
 *       tags: [Students]
 *       description: Calculates the average of student grades in the spreadsheet.
 *       responses:
 *         200:
 *           description: Operation performed successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Message indicating the success of the operation.
 */

export default sheetsRouter;