// import { Aluno, Turma, Pessoa } from "./types";
// import {
//   adicionarAlunoTurma,
//   criarAluno,
//   excluirAlunoTurma,
//   ultimaMatricula,
// } from "./functions";
// import criarTurma from "./functions/criar-turma";

// const button = document.getElementById("botao-excluir") as HTMLButtonElement;

// const escola: Turma[] = [];

// function adicionarTurmaEscola(nome: string, codigo: number) {
//   const novaTurma = criarTurma(nome, codigo, escola);
//   if (novaTurma) {
//     escola.push(novaTurma as Turma);
//   }
// }

// function adicionarAluno(aluno: Aluno, codigoDaTurma: number) {
//   const turmaComAluno = adicionarAlunoTurma(codigoDaTurma, aluno, escola);

//   if (turmaComAluno) {
//     const index = escola.findIndex((turma) => turma.codigo === codigoDaTurma);
//     escola[index] = turmaComAluno as Turma;
//   }
// }

// function excluirAluno(codigoDaMatricula: number, codigoDaTurma: number) {
//   const trurmaSemAluno = excluirAlunoTurma(
//     codigoDaTurma,
//     codigoDaMatricula,
//     escola
//   );

//   const index = escola.findIndex((turma) => turma.codigo === codigoDaTurma);
//   escola[index] = trurmaSemAluno as Turma;

//   console.log(escola);
// }

// adicionarTurmaEscola("Turma Legal 2", 2);
// adicionarTurmaEscola("Turma Legal 1", 1);
// adicionarTurmaEscola("Turma Legal 4", 4);
// adicionarTurmaEscola("Turma Legal 3", 3);

// console.log(escola);

// adicionarAluno(
//   {
//     nome: "Marcelo",
//     cpf: "876876876",
//     cursando: true,
//     idade: 33,
//     matricula: ultimaMatricula(),
//   },
//   4
// );

// adicionarAluno(
//   {
//     nome: "Larissa",
//     cpf: "764333",
//     cursando: true,
//     idade: 20,
//     matricula: ultimaMatricula(),
//   },
//   1
// );

// adicionarAluno(
//   {
//     nome: "Darlan",
//     cpf: "76422333",
//     cursando: true,
//     idade: 32,
//     matricula: ultimaMatricula(),
//   },
//   1
// );

// adicionarAluno(
//   {
//     nome: "Guilherme",
//     cpf: "16422333",
//     cursando: true,
//     idade: 30,
//     matricula: 1000,
//   },
//   1
// );

// console.log("----------DEPOIS DE ADICIONAR OS ALUNOS----------");
// console.log(escola);

// button.addEventListener("click", () => {
//   excluirAluno(1000, 1);
// });
