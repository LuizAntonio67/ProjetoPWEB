"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("./controllers/UserController");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const userController = new UserController_1.UserController();
app.get('/users/:id', userController.findUser);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);
app.get('/users', userController.listUsers);
/*
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.get('/id', (req, res) => {
  console.log('Usuário encontrado com sucesso!');
});

app.post('/id', (req, res) => {
  console.log('Usuário cadastrado com sucesso!');
});

app.put('/id', (req, res) => {
  console.log('Usuário atualizado com sucesso!');
});

app.delete('/id', (req, res) => {
  console.log('Usuário removido com sucesso!');
}); */
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
