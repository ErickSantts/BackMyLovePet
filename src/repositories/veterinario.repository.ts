import { getConnection } from "typeorm";
import { Consulta } from "../entities/consulta.entity";

export class VeterinarioRepository {

    static async getConsultasVetId(id: number){
        return getConnection()
        .getRepository(Consulta)
        .find({
           relations: ["veterinario_id"]
        })
    }
}