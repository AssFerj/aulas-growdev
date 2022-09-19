// Utilizando o IF, ELSE, ELSE IF crie uma estrutura 
// para receber um número de 1 a 7 e imprimir no console 
// o dia da Semana. Para este exercício assumimos que o 
// dia 1 é Domingo, dia 2 é segunda e assim por diante. 
// Caso o número recebido não esteja neste intervalo 
// imprimir “Dia não reconhecido”.

const diaDaSemana:number = Number(prompt('Escolha um dia da semana:\nDomingo: [1]\nSegunda: [2]\nTerça: [3]\nQuarta: [4]\nQuinta: [5]\nSexta: [6]\nSábado: [7]'));

if(diaDaSemana == 1){
    console.log('Hoje é Domingo');
}else if(diaDaSemana == 2){
    console.log('Hoje é Segunda');
}else if(diaDaSemana == 3){
    console.log('Hoje é Terça');
}else if(diaDaSemana == 4){
    console.log('Hoje é Quarta');
}else if(diaDaSemana == 5){
    console.log('Hoje é Quinta');
}else if(diaDaSemana == 6){
    console.log('Hoje é Sexta');
}else if(diaDaSemana == 7){
    console.log('Hoje é Sábado');
}else{
    console.log('Dia não reconhecido');
}