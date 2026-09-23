// src/server.js

import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import { errors } from 'celebrate';

import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import notesRoutes from './routes/notesRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

// глобальні middleware
app.use(logger);
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// підключаємо групу маршрутів юзера
app.use(authRoutes);
// підключаємо групу маршрутів note
app.use(notesRoutes);
// Додаємо раути користувача
app.use(userRoutes);

// обробка 404
app.use(notFoundHandler);
// обробка помилок від celebrate (валідація)
app.use(errors());
// глобальна обробка інших помилок
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
