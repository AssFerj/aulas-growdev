let totalEleitores = Number(prompt("Digite o total de eleitores:"))
let votosBrancos = Number(prompt("Digite o total de votos em branco:"))
let votosNulos = Number(prompt("Digite o total de votos nulos:"))
let votosValidos = Number(prompt("Digite o total de votos válidos:"))

let centoBrancos = votosBrancos / totalEleitores * 100
let centoNulos = votosNulos / totalEleitores * 100
let centoValidos = votosValidos / totalEleitores * 100

if(votosBrancos +  votosNulos + votosValidos > totalEleitores){
    alert(`Digite quantidades válidas para que as eleições ocorram de forma tranquila`)
}else{
    alert(
        `Nessa eleição tivemos um total de ${totalEleitores} eleitores.\n
        Um total de ${votosBrancos} votos em Branco representando ${centoBrancos.toFixed(2)}% dos votos.\n
        Um total de ${votosNulos} votos em Branco representando ${centoNulos.toFixed(2)}% dos votos.\n
        Um total de ${votosValidos} votos em Branco representando ${centoValidos.toFixed(2)}% dos votos.`
    )
}