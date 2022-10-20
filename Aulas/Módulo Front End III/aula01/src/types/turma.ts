import Aluno from "./aluno";

interface Turma {
  nome: string;
  codigo: number;
  alunos: Aluno[];
}

export default Turma;
