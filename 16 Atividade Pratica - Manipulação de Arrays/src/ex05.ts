// Crie uma lista com 7 produtos eletrodomésticos e pergunte 
// para o usuário qual produto ele deseja comprar.
// Utilize o método findIndex para verificar se o produto 
// que o usuário quer existe dentro da lista, se o produto 
// existir mostre uma mensagem parabenizando pela compra e 
// remova o produto da lista utilizando o splice.

// Faça a mesma atividade anterior, mas troque a função 
// findIndex pela função find. Dica: para localizar o 
// indíce do elemento na lista é possível utilizar a 
// função interna do array chamada indexOf (veja a 
// documentação e aprenda a como utilizar)

const arrayProduct:string[] = ['Geladeira', 'Fogão', 'Smart TV', 'Notebook', 'Microondas', 'Minisystem', 'Mesa'];

const product:string|null = prompt('Escolha um dos produtos:\nGeladeira\nFogão\nSmart TV\nNotebook\nMicroondas\nMinisystem\nMesa');

const productIndex:string|undefined = arrayProduct.find(element => element == product);

console.log(productIndex);

arrayProduct.splice(arrayProduct.indexOf(product as string), 1);
console.log(arrayProduct);