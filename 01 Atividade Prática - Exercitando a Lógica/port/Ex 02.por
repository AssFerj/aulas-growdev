programa
{
	//As maçãs desta estação custam R$0,30 se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. 
	//Desenvolva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
	funcao inicio()
	{
		inteiro qtdMaca, resultado

		escreva("Quantas maçâs quer comprar? ")
		leia(qtdMaca)
		
		se (inteiro qtdMaca < 12){
			resultado = inteiro qtdMaca * 0.3
		}senao{
			resultado = inteiro qtdMaca * 0.25
			}
			escreva("\nO valor da compra é: R$" + resultado)
			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 492; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */