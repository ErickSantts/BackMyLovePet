import { Consulta } from "../entities/consulta.entity"
import { getConnection, getRepository } from "typeorm";

export class DonoRepository {
    static async getAllConsultas() {
        return  await getConnection()
            .getRepository(Consulta)
            .find()
    }

    static async getConsulta(id: number) {
        return await getConnection()
            .getRepository(Consulta)
            .findOne(
                {
                    where: {
                        id: id,
                    }
                }
            )
    }
}