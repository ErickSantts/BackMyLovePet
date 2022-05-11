

import { Router, Response, Request } from "express";
import ConsultasService from "../services/consultas.service";

const router = Router();

router.get('/:senha/:email', async (req: Request, res: Response) => {
    const login = await ConsultasService.authenticate(req.params.email,req.params.senha)
    res.send(login)
})

export default router;