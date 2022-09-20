// Crie uma lista com 7 produtos eletrodomésticos e pergunte 
// para o usuário qual produto ele deseja comprar.
// Utilize o método findIndex para verificar se o produto 
// que o usuário quer existe dentro da lista, se o produto 
// existir mostre uma mensagem parabenizando pela compra e 
// remova o produto da lista utilizando o splice.

const prod:string|null = prompt('Escolha um dos produtos:\nGeladeira\nFogão\nSmart TV\nNotebook\nMicroondas\nMinisystem\nMesa');

const arrayProd:string[] = ['Geladeira', 'Fogão', 'Smart TV', 'Notebook', 'Microondas', 'Minisystem', 'Mesa'];

function compareIndex(prodIndex:any):boolean{

    if(prodIndex == prod){
        console.log(`Parabéns pela escolha, o produto escolhido foi ${prodIndex}`)
        return true;
    }else{
        console.log(`Escolha o produto desejado`)
        return false;
    }
    
}

const prodIndex:number = arrayProd.findIndex(compareIndex);
arrayProd.splice(arrayProd.indexOf(prod as string), 1);
console.log(arrayProd);

