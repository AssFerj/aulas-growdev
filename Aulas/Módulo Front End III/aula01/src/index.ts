import { Aluno, Turma, Pessoa } from "./types";
let ultimaMatricula: number = 0;

function criarAluno(pessoaRecebida: Pessoa, cursando: boolean): Aluno {
  ultimaMatricula += 1;
  const aluno: Aluno = {
    nome: pessoaRecebida.nome,
    cpf: pessoaRecebida.cpf,
    idade: pessoaRecebida.idade,
    cursando,
    matricula: ultimaMatricula,
  };

  return aluno;
}

function criarTurma(nomeRecebido: string, codigoRecebido: number): Turma {
  const turma: Turma = {
    nome: nomeRecebido,
    codigo: codigoRecebido,
    alunos: [],
  };

  return turma;
}

function adicionaAlunoTurma(turma: Turma, aluno: Aluno) {
  turma.alunos.push(aluno);
}

const novaTurma = criarTurma("Truma Legal", 1);

const alunoCriado1 = criarAluno(
  {
    nome: "Marcelo Eltz",
    cpf: "123123",
    idade: 33,
  },
  false
);

const alunoCriado2 = criarAluno(
  {
    nome: "Joao da Silva",
    cpf: "8765876",
    idade: 25,
  },
  false
);
console.log("-------ANTES DE ADICIONAR--------");
console.log(novaTurma);
adicionaAlunoTurma(novaTurma, alunoCriado1);
adicionaAlunoTurma(novaTurma, alunoCriado2);

console.log("-------DEPOIS DE ADICIONAR--------");
console.log(novaTurma);
