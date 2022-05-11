import { Consulta } from "../entities/consulta.entity";
import { Pet } from "../entities/pet.entity";

export interface Pessoa {
    id: number,
    nome: string,
    email: string,
    contato: string,
    dataNascimento: Date,
    senha: string,
    perfil: string,
  }
  