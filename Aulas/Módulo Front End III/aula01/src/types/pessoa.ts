interface Pessoa {
  nome: string;
  apelido?: string;
  idade: number;
  cpf: string;
}

type PessoaType = {
  nome: string;
  apelido?: string;
  idade: number;
  cpf: number;
};

export default Pessoa;
