import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import ConsultasService from '../services/consultas.service';
import { Pessoa } from "../models/pessoa.model";
import { FuncionarioRepository } from '../repositories/funcionario.repository';
const router = Router();

router.get('/funcionarios', async (req: Request, res: Response) => {
    const funcionarios = await ConsultasService.getFuncionarios()
    res.send(funcionarios)
})

router.get('/clientes', async (req: Request, res: Response) => {
    const clientes = await ConsultasService.getClientes()
    res.send(clientes)
})

router.get('/:id', async (req: Request, res: Response) =>{
    const funcionario = await ConsultasService.getFuncionarioById(parseInt(req.params.id))
    res.send(funcionario)
})

router.post('/novo', async (req: Request, res: Response) =>{
    await FuncionarioRepository.create(req.body);
    res.status(201).send(generateMessage("Funcionario inserido com sucesso!"))
})

router.post('/nova/consulta', async (req: Request, res: Response) =>{
    await FuncionarioRepository.createConsulta(req.body);
    res.status(201).send(generateMessage("Consulta realizada com sucesso!"))
})

router.post('/novo/pet', async (req: Request, res: Response) =>{
    await FuncionarioRepository.createPet(req.body);
    res.status(201).send(generateMessage("Pet inserido com sucesso!"))
})




export default router;