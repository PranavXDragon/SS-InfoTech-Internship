import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientFolder = path.join(__dirname, '../Client');

app.use(cors());
app.use(express.json());
app.use(express.static(clientFolder));

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

export default app;