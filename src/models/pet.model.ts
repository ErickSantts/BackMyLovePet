import { Pessoa } from "../entities/pessoa.entity";

export interface Pet {
  id: string,
  nome: string,
  raca: string,
  donoId: string,
  idade: string,
  dono: Pessoa
}