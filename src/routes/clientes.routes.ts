import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import ConsultasService from '../services/consultas.service';
const router = Router();

router.get('/consultas/:id', async (req: Request, res: Response) => {
    const consultas = await ConsultasService.getConsultasById(req.params.id)
    res.send(consultas)
})

export default router;