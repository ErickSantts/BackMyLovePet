import { Pessoa } from "../entities/pessoa.entity";
import { Pet } from "../entities/pet.entity";

export interface Consulta {
    id: number,
    nome: string,
    pet: Pet,
    dono: Pessoa,
    raca: string,
    dataConsulta: Date,
    remedios: string,
    valor: number,
    detalhes: string,
    veterinarioId: Pessoa
}