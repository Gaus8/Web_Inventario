import express from 'express';
import { registerUser, loginUser, verificarCuenta } from '../controllers/userController.js';
export const routerRegister = express.Router();

routerRegister.post('/registro', registerUser);

routerRegister.post('/login', loginUser);

routerRegister.get('/validacion/:token', verificarCuenta);
