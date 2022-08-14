/*Desenvolva um algoritmo para ler dois valores e imprimir uma 
das três mensagens a seguir:
	a. ‘Números iguais’, caso os números sejam iguais;
	b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
	c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.*/

let num1 = parseFloat(prompt("Digite um número:"));
let num2 = parseFloat(prompt("Digite mais um número:"));

if(num1 == num2){
    alert("Os números são iguais");
}else if(num1 > num2){
    alert("O primeiro número é maior");
}else if(num1 < num2){
    alert("O segundo número é maior");
}