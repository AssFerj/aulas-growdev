import Aluno from "./aluno";

interface Turma {
    nome: string;
    codigo: number;
    aluno: Aluno[];
}

export default Turma;