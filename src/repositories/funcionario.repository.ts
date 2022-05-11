import { getConnection, getRepository } from "typeorm";
import { Consulta } from "../entities/consulta.entity";
import { Pessoa } from "../entities/pessoa.entity";
import { Pet } from "../entities/pet.entity";


export class FuncionarioRepository {
    static async getAllConsultas() {
        return getConnection()
            .getRepository(Consulta)
            .find()
    }

    static async getAllPets() {
        return getConnection()
            .getRepository(Pet)
            .find()
    }

    static async create(funcionario: Pessoa) {
        return  await getConnection()
            .getRepository(Pessoa)
            .insert(funcionario)
    }

    static async createConsulta(consulta: Consulta) {
        return  await getConnection()
            .getRepository(Consulta)
            .insert(consulta)
    }
}