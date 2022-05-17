import { VeterinarioRepository } from './../repositories/veterinario.repository';
import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import ConsultasServices from '../services/consultas.service';
const router = Router();

router.get('/pets', async (req: Request, res: Response) => {
    const pets = await ConsultasServices.getAllPets()
    res.send(pets)
})

router.get('/pet/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const pets = await VeterinarioRepository.getPetById(id);
    res.send(pets)
})
export default router;