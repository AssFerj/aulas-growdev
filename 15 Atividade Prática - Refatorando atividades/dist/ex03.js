"use strict";
// Uma loja de eletrodomésticos estabeleceu as seguintes 
// modalidades de pagamento para a venda de suas mercadorias:
// Escreva um algoritmo que armazene o preço de tabela e o 
// número de vezes em que o pagamento será feito. Calcule o 
// valor de cada parcela e o preço total da compra e imprima 
// no console.
let preco = Number(prompt('Digite o valor do produto:'));
let parcelamento = Number(prompt('Digite a quantidade de parcelas:'));
let taxaAvista = preco * 2.5 / 100;
let juros6a10 = preco * 6 / 100;
let juros11a15 = preco * 13 / 100;
let valorTotal = 0;
if (preco <= 0) {
    document.write('Digite um valor válido!');
}
else if (parcelamento <= 0 || parcelamento >= 16) {
    document.write('Digitar um valor válido para calcular o parcelamento!');
}
else if (parcelamento == 1) {
    document.write(`O valor de sua tabela é ${preco}<br>Você escolheu pagar à vista e recebeu um desconto de 2,5%<br>O valor total de sua compra é ${preco - taxaAvista}`);
}
else if (parcelamento >= 2 && parcelamento <= 5) {
    document.write(`O valor de sua tabela é ${preco}<br>Você não recebeu desconto<br>Seu parcelamento ficou ${parcelamento}x${preco / parcelamento}<br>O valor total de sua compra é ${preco}`);
}
else if (parcelamento >= 6 && parcelamento <= 10) {
    valorTotal = preco - juros6a10;
    document.write(`O valor de sua tabela é ${preco}<br>Você recebeu um desconto de 6%<br>O valor total de sua compra é ${valorTotal}<br>Seu parcelamento ficou ${parcelamento}x${valorTotal / parcelamento}`);
}
else if (parcelamento >= 11 && parcelamento <= 15) {
    valorTotal = preco - juros11a15;
    document.write(`O valor de sua tabela é ${preco}<br>Você recebeu um desconto de 13%<br>O valor total de sua compra é ${valorTotal}<br>Seu parcelamento ficou ${parcelamento}x${valorTotal / parcelamento}`);
}
