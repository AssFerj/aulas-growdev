let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite mais um número:"))
let num3 = Number(prompt("Digite outro número:"))

if(num1 == num2 || num1 == num3 || num2 == num3){
    alert("Você repetiu algum número na digitação")
}else if(num1 <= 0 || num2 <= 0 || num3 <= 0){
    alert("Os três números devem ser positivos maiores que zero")
}else{
    console.log("A soma dos números é: ", num1 + num2 + num3);
    console.log("A média dos números é: ", (num1 + num2 + num3)/3);
    console.log("O produto dos números é: ", (num1 * num2 * num3));
    console.log("O maior dos número é: ", Math.max(num1, num2, num3))
    console.log("O menor dos número é: ", Math.min(num1, num2, num3))
}

