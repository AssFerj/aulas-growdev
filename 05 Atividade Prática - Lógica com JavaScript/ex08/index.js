let tabela = Number(prompt("Digite o valor da tabela:"))
let parcelamento = Number(prompt("Digite a quantidade de parcelas:"))
let taxaAvista = tabela * 2.5 /100
let juros6a10 = tabela * 6 /100
let juros11a15 = tabela * 13 /100
let total = 0

if(parcelamento <= 0 && parcelamento >=16){
    alert("Digite uma quantidade válida!")
}else if(parcelamento == 1){
    total = tabela - taxaAvista
    console.log(`Valor total da compra: R$ ${total}`)
}else if(parcelamento >= 2 && parcelamento <= 5){
    total = tabela
    console.log(`
        Parcelamento em ${parcelamento}x${total/parcelamento}
        Valor total da compra: R$ ${total.toFixed(2)}
    `)
}else if(parcelamento >= 6 && parcelamento <= 10){
    total = tabela + juros6a10
    console.log(`
        Parcelamento em ${parcelamento}x${total/parcelamento}
        Valor total da compra: R$ ${total.toFixed(2)}
    `)
}else if(parcelamento >= 11 && parcelamento <= 15){
    total = tabela + juros11a15
    console.log(`
        Parcelamento em ${parcelamento}x${total/parcelamento}
        Valor total da compra: R$ ${total.toFixed(2)}
    `)
}