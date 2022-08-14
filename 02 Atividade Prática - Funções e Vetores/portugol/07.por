programa
{
	/*Desenvolva um algoritmo para percorrer um vetor 
	 * de 20 elementos inteiros e no final mostre a 
	 *soma de todos os elementos.*/
	funcao inicio()
	{
		inteiro numeros[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}
		inteiro somaNumeros = 0
		para (inteiro i=0; i<19; i++){
			somaNumeros += numeros[i]
		}
		escreva("A soma dos números do vetor é: ", somaNumeros + "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 419; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */