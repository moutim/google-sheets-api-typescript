import { NextFunction, Request, Response } from 'express';
import Joi from "joi";
import { StatusCodes } from 'http-status-codes';

const schemaCreateStudent = Joi.object().keys({
  name: Joi.string().min(3).required(),
  absences: Joi.number().required(),
  test1: Joi.number().required(),
  test2: Joi.number().required(),
  test3: Joi.number().required(),
});

const verifyRegister = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schemaCreateStudent.validate(req.body);

  if (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error?.message });
  }

  next();
};

export default verifyRegister;
