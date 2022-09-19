"use strict";
// Escreva um algoritmo que armazene o número total de eleitores 
// de um município, o número de votos brancos, nulos e válidos. 
// Calcular e escrever o percentual que cada um representa em 
// relação ao total de eleitores. O algoritmo deve fazer uma 
// validação para que as porcentagens dos votos armazenados 
// (brancos, nulos e válidos) respeitem o limite do número
// total de eleitores, ou seja, garantir que a soma dos votos 
// brancos, nulos e válidos não seja maior que o número total 
// de eleitores.
let totalEleitores = Number(prompt('Quantos eleitores tem seu município?'));
let votosBrancos = Number(prompt('Digite o total de votos em branco.'));
let votosNulos = Number(prompt('Digite o total de votos nulos.'));
let votosValidos = Number(prompt('Digite o total de votos válidos.'));
let centoBrancos = votosBrancos / totalEleitores * 100;
let centoNulos = votosNulos / totalEleitores * 100;
let centoValidos = votosValidos / totalEleitores * 100;
if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
    alert(`Digite quantidades válidas para que as eleições ocorram de forma tranquila`);
}
else {
    alert(`Nessa eleição tivemos um total de ${totalEleitores} eleitores.\n
        Um total de ${votosBrancos} votos em Branco representando ${centoBrancos.toFixed(2)}% dos votos.\n
        Um total de ${votosNulos} votos em Branco representando ${centoNulos.toFixed(2)}% dos votos.\n
        Um total de ${votosValidos} votos Válidos representando ${centoValidos.toFixed(2)}% dos votos.`);
}
