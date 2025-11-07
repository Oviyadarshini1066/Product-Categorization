import express from 'express';
import cors from 'cors';
import hmsRouter from './routes/hms.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', hmsRouter);

export default app;