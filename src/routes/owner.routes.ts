import { Router, Request, Response } from 'express';
import { send } from 'process';
import { generateMessage } from '../helpers/message.helper';
import { PessoaRepository } from '../repositories/pessoa.repository';
import ConsultasService from '../services/consultas.service';

const router = Router();

router.get('/consultas', async (req: Request, res: Response) => {
    const consultas = await ConsultasService.getConsultas()
    res.send(consultas)
})

router.get('/consulta/:id', async (req: Request, res: Response) => {
    const consulta = await ConsultasService.getConsulta(parseInt(req.params.id))
    res.send(consulta)
})


router.get('/pessoa/:id', async (req: Request, res: Response) => {
    const consulta = await ConsultasService.getPessoaId(parseInt(req.params.id))
    res.send(consulta)
})

router.get('/pessoabyconsulta/:id', async (req: Request, res: Response) => {
    const pessoa = await ConsultasService.getPessoaByConsulta(parseInt(req.params.id))
    res.send(pessoa)
})

router.put('/atualizacao/:id', async (req: Request, res: Response) => {
    const pessoaId = parseInt(req.params.id);
    const student = await PessoaRepository.getFuncionarioById(pessoaId); //posso usar pra qualquer pessoa
    if (!student) return res.status(404).send(generateMessage('Pessoa não encontrada! '));

    await PessoaRepository.update(pessoaId, req.body);

    res.status(200).send(generateMessage('Pessoa atualizada com sucesso!'));
});

export default router;