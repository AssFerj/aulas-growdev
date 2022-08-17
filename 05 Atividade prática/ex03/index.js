let A = Number(prompt("Digite um número:"))
let B = Number(prompt("Digite mais um número:"))
let C = Number(prompt("Digite outro número:"))

if(A < B+C && B < A+C && C < A+B){
    console.log("Ótimo, as medidas informadas formam um triângulo");
    tipoTriangulo()
}

function tipoTriangulo(){
    if(A == B || A == C || B == C){
        console.log("Triângulo isósceles");
    }else if(A != B && B != C && A != C){
        console.log("Triângulo escaleno");
    }else if(A == B && B == C){
        console.log("Triângulo equilátero");
    }
}