// Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Some o valor total de todos números utilizando o reduce.

const arrayNrs: number[] = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

const initValue:number = 0;
const sum = arrayNrs.reduce((prevValue, currValue) => prevValue + currValue, initValue);

console.log(sum);