import express from 'express';
import { subirImg } from '../middleware/subirImg.js';
import { 
  registerProducts, 
  getProducts, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productosControllers.js';

export const routerProducts = express.Router();


routerProducts.get('/get-productos', getProducts); // Obtener todos
routerProducts.post('/registro-productos',subirImg, registerProducts); // Crear
routerProducts.put('/productos/:id', updateProduct); // Actualizar
routerProducts.delete('/productos/:id', deleteProduct); // Eliminar