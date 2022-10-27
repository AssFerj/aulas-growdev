import { Aluno, Turma } from "../types";

function adicionarAlunoTurma(
  codigoDaTurma: number,
  aluno: Aluno,
  escola: Turma[]
): Turma | boolean {
  const filtrada = escola.find((turma) => turma.codigo === codigoDaTurma);

  if (!filtrada) {
    console.log("Turma não encontrada!");
    return false;
  }

  filtrada.alunos.push(aluno);

  return filtrada;
}

export default adicionarAlunoTurma;
