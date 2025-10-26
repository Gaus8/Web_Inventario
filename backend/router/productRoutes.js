import express from 'express';
import { 
  registerProducts, 
  getProducts, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productosControllers.js';

export const routerProducts = express.Router();


routerProducts.get('/productos', getProducts); // Obtener todos
routerProducts.post('/registro-productos', registerProducts); // Crear
routerProducts.put('/productos/:id', updateProduct); // Actualizar
routerProducts.delete('/productos/:id', deleteProduct); // Eliminar