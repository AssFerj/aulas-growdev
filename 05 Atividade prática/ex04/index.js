let anoAtual = Number(prompt("Digite o ano atual:"))
let anoNascimento = Number(prompt("Digite o ano do seu nascimento:"))
let calculo = anoAtual - 18
console.log(calculo)

if(anoAtual - 18 >= anoNascimento){
    console.log("Você poderá votar esse ano")
}else{
    console.log("Você não poderá votar esse ano")
}


