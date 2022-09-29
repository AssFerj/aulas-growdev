// Dado a seguinte lista de números:
// 17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32

// a) Adicione +1 em cada valor da lista;

const arrayNum: number[] = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
let numero:number[] = arrayNum.map((value:number)=>value+1);
console.log(numero);

// b) Crie um novo array contendo apenas os valores ímpares;

let impares:number[] = arrayNum.filter((value:number)=>value %2 != 0);
console.log(impares);

// c) Crie um novo array alterando todos os valores ímpares 
// para o próximo valor par;

let newPar:number[] = arrayNum.map((value:number)=>value % 2 != 0?value + 1:value);
console.log(newPar);

// d) Crie um novo array com os valores menores do que 20;

let menor20:number[] = arrayNum.filter((value:number)=>value < 20);
console.log(menor20);

// e) Crie um novo array com os valores menores do que 17 e 
// incremente cada um dos valores desse novo array;

let menor17:number[] = arrayNum.filter((value:number)=>value < 17).map((value:number)=>value + 1);
console.log(menor17);

// f) Retorne a soma de todos os valores menores do que 20;

menor20.filter((value:number)=>value<20).reduce((total, value)=>total+value, 0);
console.log(menor20);

