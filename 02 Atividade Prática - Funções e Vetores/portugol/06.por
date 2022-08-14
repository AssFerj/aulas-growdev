programa
{
	/*Desenvolva um algoritmo para percorrer um vetor de 
	 * 15 elementos inteiros já preenchido e imprima 
	 * todos os valores pares.*/
	funcao inicio()
	{
		inteiro vetor[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}
		para (inteiro i=0; i<15; i++){
			se(vetor[i] %2 == 0){
				escreva(vetor[i], ", ")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 323; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */