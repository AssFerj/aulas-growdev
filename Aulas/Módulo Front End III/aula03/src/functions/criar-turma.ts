import { Turma } from "../types";

function criarTurma(
  nomeRecebido: string,
  codigoRecebido: number,
  escola: Turma[]
): Turma | boolean {
  const filtrado = escola.find((turma) => turma.codigo === codigoRecebido);

  if (filtrado) {
    console.log(`Turma com o ${codigoRecebido} já existe.`);
    return false;
  }

  const turma: Turma = {
    nome: nomeRecebido,
    codigo: codigoRecebido,
    alunos: [],
  };

  return turma;
}

export default criarTurma;
