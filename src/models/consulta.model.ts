import { Pessoa } from "../entities/pessoa.entity";
import { Pet } from "../entities/pet.entity";

export interface Consulta {
    id: string,
    nome: string,
    petId: Pet,
    donoId: Pessoa,
    raca: string,
    dataConsulta: Date,
    remedios: string,
    valor: number,
    detalhes: string,
    veterinarioId: Pessoa
}