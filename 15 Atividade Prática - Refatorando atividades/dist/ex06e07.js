"use strict";
// Crie uma constante para ler a idade de um motorista. 
// Caso o motorista tenha idade maior ou igual a 18 anos 
// imprime no console “Pode dirigir”, caso contrário 
// imprima “Não pode dirigir”.
// Para o mesmo exercício acima insira mais uma variável 
// a condicional, além de saber se o motorista tem 18 anos 
// ou mais, temos que saber também se ele é habilitado 
// para dirigir. Caso ele tenha idade maior ou igual a 18 
// anos e possua habilitação, imprima no console “Pode dirigir”
// caso contrário imprima “Não pode dirigir”.
const idadeMotorista = Number(prompt('Digite sua idade!'));
const habilitado = confirm('Você é habilitado?');
idadeMotorista >= 18 && habilitado ? alert('Pode dirigir') : alert('Não pode dirigir');
