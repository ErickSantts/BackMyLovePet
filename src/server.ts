import express, { Request, Response } from 'express';
import cors from 'cors';
import funcionarioRouter from './routes/funcionario.routes'
import clienteRouter from './routes/clientes.routes'
import ownerRouter from './routes/owner.routes'
import petsRouter from './routes/pets.routes'
import login from './routes/login.routes'
import {connection} from './database/config'

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/funcionario', funcionarioRouter);
app.use('/owner', ownerRouter);
app.use('/cliente', clienteRouter);
app.use('/pets', petsRouter);
app.use('/login', login);


app.get('/', (req: Request, res: Response) => {
    const messageObject = {
        message: "Primeiro projeto funcionando na rota"
    };
    res.send(messageObject);
});



app.listen(port,  async () => {
    await connection
    console.log(`Servidor disponível na porta: ${port}`);
    console.log(`Banco conectado com sucesso`);
});