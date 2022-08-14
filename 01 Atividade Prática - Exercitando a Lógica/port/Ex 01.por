programa
{
	//Desenvolva um algoritmo para ler dois valores e imprimir uma das três mensagens a seguir:
	//a. ‘Números iguais’, caso os números sejam iguais;
	//b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
	//c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.
	
	funcao inicio()
	{
		inteiro n1, n2
		escreva("Digite um número inteiro:")
		leia(n1)

		escreva("Digite mais um número inteiro:")
		leia(n2)

		se (n1 == n2){
			escreva("Números iguais")
		}senao se (n1 > n2){
			escreva("Primeiro é maior")
		}senao se(n1 < n2){
			escreva("Segundo maior")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 595; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */