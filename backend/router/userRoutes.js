import express from 'express';
import { registerUser } from '../controllers/userController.js';
export const routerRegister = express.Router();

routerRegister.get('/', (req, res) => {
  res.render('index.ejs');
});

routerRegister.post('/', registerUser);