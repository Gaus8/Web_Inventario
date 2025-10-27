// Importación de dependencias y métodos de conexion
import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { connectionDb } from './backend/dbConnection.js';
import { routerRegister } from './backend/router/userRoutes.js';
import { routerProducts } from './backend/router/productRoutes.js';
import routerImg from './imagenes.js';
import cors from 'cors';

const corsOptions = {
  origin: [
    'https://inventario-cdisfruta.netlify.app', // producción
    'http://localhost:5173'                     // desarrollo local
  ],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};  


const app = express();
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', routerRegister);
app.use('/api', routerProducts);
app.use('/api', routerImg)

app.post('/api/logout', (req, res) => {
  res.clearCookie('access_token');
  res.status(200).json({ message: 'Sesión cerrada' });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectionDb(); // Asegurarte de esperar la conexión
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};


startServer();
