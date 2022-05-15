import { Pessoa } from "../entities/pessoa.entity";

export interface Pet {
  id: string,
  nome: string,
  raca: string,
  idade: string,
  dono: Pessoa
}