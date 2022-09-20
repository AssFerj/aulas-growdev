// Crie um algoritmo que solicite para o usuário informar um 
// número qualquer 7x. Adicione cada número informado pelo 
// usuário em uma lista. No final utilize o forEach para 
// mostrar cada elemento da lista.

let array: number[] = [
    Number(prompt('Digite um número:')), 
    Number(prompt('Digite um número:')), 
    Number(prompt('Digite um número:')), 
    Number(prompt('Digite um número:')), 
    Number(prompt('Digite um número:')), 
    Number(prompt('Digite um número:')), 
    Number(prompt('Digite um número:'))
];

array.forEach(index => {
    console.log(index)
});