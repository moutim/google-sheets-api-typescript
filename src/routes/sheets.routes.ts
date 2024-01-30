import { Router } from 'express';

const sheetsRouter = Router();

sheetsRouter.get('/teste', (req, res) => {
  res.send('teste');
});

export default sheetsRouter;