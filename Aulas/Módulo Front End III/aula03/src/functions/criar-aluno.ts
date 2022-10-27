import { Aluno, Pessoa } from "../types";
import { ultimaMatricula } from "./index";

function criarAluno(pessoaRecebida: Pessoa, cursando: boolean): Aluno {
  const aluno: Aluno = {
    nome: pessoaRecebida.nome,
    cpf: pessoaRecebida.cpf,
    idade: pessoaRecebida.idade,
    cursando,
    matricula: ultimaMatricula(),
  };

  return aluno;
}

export default criarAluno;
