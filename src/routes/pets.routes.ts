import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import ConsultasServices from '../services/consultas.service';
const router = Router();

router.get('/pets', async (req: Request, res: Response) => {
    const pets = await ConsultasServices.getAllPets()
    res.send(pets)
})
export default router;