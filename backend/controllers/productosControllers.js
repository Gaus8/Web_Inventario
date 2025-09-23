import Producto from '../schema/productsSchema.js';

export const registerProducts = async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoria, stock, imagen, fechaCreacion, activo } = req.body;

    const newProduct = {
      nombre,
      descripcion,
      precio,
      categoria,
      stock,
      imagen,
      fechaCreacion,
      activo
    };
    
    const createProduct = await Producto.create(newProduct);
    if (createProduct) {
      res.status(201).json({
        status: 'success',
        message: 'Producto Creado'
      });
    } else {
      res.status(400).json({
        status: 'error',
        message: 'Fallo al crear'
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};
