"use strict";
// Crie um algoritmo que armazene três valores, para cada 
// um dos lados de um triângulo: A, B e C. Verifique se os 
// lados fornecidos formam realmente um triângulo. Se 
// formar, deve mostrar no console o tipo de triângulo: 
// isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um 
// triângulo: A < B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou 
// A=C ou B=C);
// c. Triângulo escaleno: possui todos os lados diferentes 
// (A<>B e B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais 
// (A=B e B=C);
let A = Number(prompt("Digite um número:"));
let B = Number(prompt("Digite mais um número:"));
let C = Number(prompt("Digite outro número:"));
if (A < B + C && B < A + C && C < A + B) {
    console.log("Ótimo, as medidas informadas formam um triângulo");
    tipoTriangulo();
}
function tipoTriangulo() {
    if (A == B || A == C || B == C) {
        console.log("Triângulo isósceles");
    }
    else if (A != B && B != C && A != C) {
        console.log("Triângulo escaleno");
    }
    else if (A == B && B == C) {
        console.log("Triângulo equilátero");
    }
}
