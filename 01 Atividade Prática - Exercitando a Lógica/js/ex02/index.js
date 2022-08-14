/*As maçãs desta estação custam R$0,30 se forem compradas menos 
do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. 
Desenvolva um algoritmo que leia o número de maçãs compradas, 
calcule e escreva o valor total da compra.*/

const valorMenorDoze = 0.3;
const valorAteDoze = 0.25;
let qtd = prompt("Digite quantas maçâs você deseja comprar:");
let valorTotal = 0;

if(qtd < 12){
    valorTotal =  qtd * 0.3;
    document.write("Você comprou " + qtd + " maçãs vendidas a R$ " + valorMenorDoze + " a unidade");
    document.write("</br>");
    document.write("O valor total da sua compra é R$ " + valorTotal.toFixed(2));
}else if(qtd >= 12){
    valorTotal =  qtd * 0.25;
    document.write("Você comprou " + qtd + " maçãs vendidas a R$ " + valorAteDoze + " a unidade");
    document.write("</br>");
    document.write("O valor total da sua compra é R$ " + valorTotal.toFixed(2));
}