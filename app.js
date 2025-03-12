//Importación de dependencias y métodos
import express from 'express';

import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { connectionDb } from './backend/dbConnection.js';
connectionDb();

const app = express();
app.use(cookieParser());
app.use(express.json());
