// Importación de dependencias y métodos de conexion
import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { connectionDb } from './backend/dbConnection.js';
import { routerRegister } from './backend/router/userRoutes.js';
connectionDb();

const app = express();
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.static('public'));
app.use('/', routerRegister);



app.get('/', (req, res) => {
  res.render('main.ejs');
});

const PORT = process.env.PORT || 5000;


const startServer = async () => {
  await connectionDb(); // Asegurarte de esperar la conexión
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};

startServer();

