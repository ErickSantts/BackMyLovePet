
import { getConnection } from "typeorm";
import { Consulta } from "../entities/consulta.entity";
import { Pet } from "../entities/pet.entity";

export class VeterinarioRepository {

    static async getConsultasVetId(id: number){
        return getConnection()
        .getRepository(Consulta)
        .find({
           relations: ["veterinario_id"]
        })
    }

    static async getPetById(id: number){
        return getConnection()
            .getRepository(Pet)
            .findOne(
                {
                    where: {
                        id: id
                    }
                }
            )
    }
}