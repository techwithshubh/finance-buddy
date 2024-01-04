import express from 'express'
import cors from 'cors'
import { json } from 'body-parser';
import { savingsRouter } from './routes';

const app = express();
app.use(cors());
app.use(json());

app.use("/api/savings",savingsRouter)

export default app