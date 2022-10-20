import Pessoa from "./pessoa";

interface Aluno extends Pessoa {
  matricula: number;
  cursando: boolean;
  turno?: "TARDE" | "MANHA" | "NOITE";
  turma?: number;
  desempenho?: number;
}

export default Aluno;
