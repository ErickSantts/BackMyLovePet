import { getConnection } from "typeorm";
import { Consulta } from "../entities/consulta.entity";
import { Pessoa } from "../entities/pessoa.entity";

export class ClienteRespository{
    static async getConsultasPorCliente(id: number){
        return getConnection()
        .getRepository(Consulta)
        .find({
           relations: ["dono"],
           where:{
               dono: id
           }
        }
        )
    }

    static async create(funcionario: Pessoa){
        return getConnection()
        .getRepository(Pessoa)
        .insert(funcionario)
    }
}