import { createConnection } from "typeorm";
import { Consulta } from "../entities/consulta.entity";
import { Pessoa } from "../entities/pessoa.entity";
import { Pet } from "../entities/pet.entity";

export const connection = createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'senhapostgres',
    database: 'my_pet_lover_db',
    entities: [Pessoa, Consulta, Pet],
    //logging: true,
    //synchronize: true
})