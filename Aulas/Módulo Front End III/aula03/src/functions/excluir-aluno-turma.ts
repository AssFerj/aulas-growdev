import { Aluno, Turma } from "../types";

function excluirAlunoTurma(
  codigoDaTurma: number,
  codigoDaMatricula: number,
  escola: Turma[]
): Turma | boolean {
  const filtrada = escola.find((turma) => turma.codigo === codigoDaTurma);

  if (!filtrada) {
    console.log("Turma não encontrada!");
    return false;
  }

  const { alunos } = filtrada;

  const index = alunos.findIndex((a) => a.matricula === codigoDaMatricula);

  if (index > -1) {
    alunos.splice(index, 1);
  }

  filtrada.alunos = alunos;

  return filtrada;
}

export default excluirAlunoTurma;
