import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import {route as todoRoute} from './Routes/todoRoute.js';

const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/todos',todoRoute);

export default app;


