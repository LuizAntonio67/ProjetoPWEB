"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello, world!3');
});
// Get user by id
app.get('/user/:id', (req, res) => {
    console.log('Usuário com id ' + req.query + ' encontrado com sucesso!');
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
