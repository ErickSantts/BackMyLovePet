import { createQueryBuilder, getConnection, getManager, getRepository } from "typeorm";
import { Consulta } from "../entities/consulta.entity";
import { Pessoa } from "../entities/pessoa.entity";

export class PessoaRepository {

    static async getLogin(email: string, senha: string) {
        return getConnection()
            .getRepository(Pessoa)
            .findOne(
                {
                    where: {
                        email: email,
                        senha: senha
                    }
                }
            )
    }

    static async getPessoa(id: number) {
        return getConnection()
            .getRepository(Pessoa)
            .findOne(
                {
                    where: {
                        id: id
                    }
                }
            )
    }
    static async getPessoaByConsulta(id: number) {
        /* const entityManager = getManager();

       async function returnId(){
            return await await entityManager.query(`select c.dono_id  from Consulta c where c.id = ${id}`);
        }

        return await getConnection()
            .getRepository(Pessoa)
            .findOne(
                {
                    where: {
                        id: await returnId
                    }
                }
            ) */

        return await getConnection()
            .getRepository(Pessoa)
            .findOne(
                {
                    where: {
                        id: 3
                    }
                }
            )

    }
    static async getFuncionarios() {
        return getConnection().
            getRepository(Pessoa)
            .find(
                {
                    where: {
                        perfil: 'funcionario'
                    }
                }
            )
    }

    static async getClientes() {
        return getConnection().
            getRepository(Pessoa)
            .find(
                {
                    where: {
                        perfil: 'cliente'
                    }
                }
            )
    }

    static async getFuncionarioById(id: number) {
        return getConnection()
            .getRepository(Pessoa)
            .findOne(
                {
                    where: {
                        id: id
                    }
                }
            )
    }

    static async update(id: number, pessoa: Partial<Pessoa>) {
        return await getConnection()
            .getRepository(Pessoa)
            .update({
                id: id
            }, pessoa)
    }


}