// Importación de dependencias y métodos de conexion
import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { connectionDb } from './backend/dbConnection.js';
import { routerRegister } from './backend/router/userRoutes.js';
import cors from 'cors';

const corsOptions = {
  origin: 'https://inventario-cdisfruta.netlify.app/',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
};



const app = express();
app.use(cookieParser());
app.use(cors()); // Aquí invocas correctamente CORS
app.use(express.json());
app.use('/', routerRegister);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectionDb(); // Asegurarte de esperar la conexión
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};

startServer();
