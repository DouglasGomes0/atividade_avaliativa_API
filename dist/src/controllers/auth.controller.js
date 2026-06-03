"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_service_1 = require("../services/auth.service");
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await (0, auth_service_1.loginUser)(email, password);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(401).json({
            error: 'Email ou senha inválidos',
        });
    }
};
exports.login = login;
