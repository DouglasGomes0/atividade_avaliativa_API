import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import Logger from './config/logger';
import routes from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Segurança
app.use(helmet());
app.use(cors());

// JSON
app.use(express.json());

// Logs
const stream = {
  write: (message: string) => Logger.http(message.trim()),
};

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    { stream }
  )
);

// Rotas
app.use(routes);

// Inicialização
app.listen(PORT, () => {
  Logger.info(`🚀 Servidor rodando na porta ${PORT}`);
});