import express from 'express';
import { registerProducts } from '../controllers/productosControllers.js';

export const routerProducts = express.Router();

routerProducts.post('/registro-productos', registerProducts);