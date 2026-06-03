"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./config/logger"));
const routes_1 = __importDefault(require("./routes"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // máximo de 100 requests
    message: {
        error: 'Muitas requisições. Tente novamente mais tarde.'
    }
});
app.use(limiter);
const PORT = process.env.PORT || 8080;
// Segurança
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
// JSON
app.use(express_1.default.json());
// Logs
const stream = {
    write: (message) => logger_1.default.http(message.trim()),
};
app.use((0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms', { stream }));
// Rotas
app.use(routes_1.default);
// Inicialização
app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`🚀 API server running at http://localhost:${PORT}`);
});
