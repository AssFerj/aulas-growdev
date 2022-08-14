programa
{
	/*Crie uma função que recebe um valor inteiro e retorne 
	 * verdadeiro se for ímpar ou falso se for par.*/
	
	funcao inicio()
	{
		inteiro valor
		logico resultado
		

		escreva("Digite um valor: ")
		leia(valor)


		se(valor %2 == 0){
			escreva("Número par (falso)")
			resultado = falso
		}senao{
			escreva("Número ímpar (verdadeiro)")
			resultado = verdadeiro
		}
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 384; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */