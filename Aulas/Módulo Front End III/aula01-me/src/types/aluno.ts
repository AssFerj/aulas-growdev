import Pessoa from "./pessoa";

interface Aluno extends Pessoa {
    matricula: number;
    cursando: boolean;
    turma?: number;
    turno?: "MANHÃ" | "TARDE" | "NOITE";
}

export default Aluno;