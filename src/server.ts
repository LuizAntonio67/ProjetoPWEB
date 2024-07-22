import express, { Request, Response } from 'express';


const app = express();
const port = 3000;


app.use(express.json());


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
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
