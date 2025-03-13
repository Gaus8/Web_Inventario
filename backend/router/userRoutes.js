import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
export const routerRegister = express.Router();

// Ruta Registro
routerRegister.get('/register', (req, res) => {
  res.render('register.ejs');
});
routerRegister.post('/', registerUser);

// Ruta Login
routerRegister.get('/login', (req, res) => {
  res.render('login.ejs');
});
routerRegister.post('/login', loginUser);
