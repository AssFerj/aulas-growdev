import {Carteira, Entrada, Saida} from "./types";

function criarEntrada(valorEntrada: number, remetente: string): Entrada{
  const entrada: Entrada = {
    id: Math.floor(Date.now() / 1000),
    valor: valorEntrada,
    data: Date.now(),
    remetente: remetente
  };
  return entrada;
};

function criarSaida(valorSaida: number, destinatario: string): Saida{
  const saida: Saida = {
    id: Math.floor(Date.now() / 1000),
    valor: valorSaida,
    data: Date.now(),
    destinatario: destinatario
  };
  return saida;
};

let minhaCarteira: Carteira = {
  saldo: 0,
  entradas: [],
  saidas: [],
};

function addEntrada(entrada: Entrada){
  minhaCarteira.entradas.push(entrada);
  atualizaSaldo();
};

const novaEntrada = criarEntrada(2000, "Assis");
addEntrada(novaEntrada);

function addSaida(saida: Saida){
  const valido = validaSaldo(saida);
  if(valido){
    return
  }
  minhaCarteira.saidas.push(saida);
  atualizaSaldo();
};

const novaSaida = criarSaida(3000, "Marcelo");
addSaida(novaSaida);

const novaSaida1 = criarSaida(500, "Marcelo");
addSaida(novaSaida1);

function validaSaldo(valorSaida: Saida){
  if(valorSaida.valor > minhaCarteira.saldo){
    console.log('Saldo insuficiente');
    return true
  }else return false
};

function atualizaSaldo(){
  const somaEntradas = minhaCarteira.entradas.reduce((soma, total)=>{
    return soma + total.valor
  }, 0)

  const somaSaidas = minhaCarteira.saidas.reduce((soma, total)=>{
    return soma + total.valor
  }, 0)

  const saldoAtual = somaEntradas - somaSaidas;
  minhaCarteira.saldo = saldoAtual;
};
