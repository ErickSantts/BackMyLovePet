import { Consulta } from "../models/consulta.model";
import { Pessoa } from "../models/pessoa.model";
import { Pet } from "../models/pet.model";
import { ClienteRespository } from "../repositories/cliente.repository";
import { DonoRepository } from "../repositories/dono.repository";
import { FuncionarioRepository } from "../repositories/funcionario.repository";
import { PessoaRepository } from "../repositories/pessoa.repository";

class ConsultasService {


  getAllPets() {
    return FuncionarioRepository.getAllPets();
   }

  getConsultas() {
    return DonoRepository.getAllConsultas();
  }

  getConsulta(id: number) {
    return DonoRepository.getConsulta(id)
  }

  getConsultasById(id: string) {
    return ClienteRespository.getConsultasPorCliente(parseInt(id))
  }

  authenticate(email: string, senha: string) {
    return PessoaRepository.getLogin(email, senha)
  }


  getFuncionarios() {
    return PessoaRepository.getFuncionarios()
  }

  getClientes() {
    return PessoaRepository.getClientes()
  }

  getFuncionarioById(id: number) {
    return PessoaRepository.getFuncionarioById(id)
  }
  salvar(novo: Pessoa) {
    alert('Pessoa inserida: ' + novo.nome)
  }

  update(id: number, pessoa: Pessoa) {
    return PessoaRepository.update(id, pessoa)
  }
  createFuncionario(pessoa: Pessoa) {
    return FuncionarioRepository.create(pessoa)
  }


  editarPessoa(pessoa: Pessoa) {

  }

  getPessoaId(id: number) {
    return PessoaRepository.getPessoa(id)
  }

  getPessoaByConsulta(id: number) {
    return PessoaRepository.getPessoaByConsulta(id)
  }
}

export default new ConsultasService;