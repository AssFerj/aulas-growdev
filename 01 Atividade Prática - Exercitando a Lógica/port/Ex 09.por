programa
{
	/*Escreva um algoritmo que faça a tabuada de um número 
	 * e apresente o resultado de acordo com o modelo a seguir, 
	 * sabendo que o multiplicando deverá ser fornecido pelo 
	 * usuário (n) e a quantidade de iterações também (i).
		1 * 2 = 2
		2 * 2 = 4
		3 * 2 = 6*/
	funcao inicio()
	{
		inteiro iteracoes, n, i
		
		faca{
		    escreva("Digite um número maior do que zero: \n")
		    leia(n)
		    
		    escreva("Quantas iterações? \n")
		    leia(iteracoes)
		}
		
		enquanto (n<=0)
		
		para (i=1; i <= iteracoes; i++){
	        escreva(n, " x ", i, " = ", n * i, " \n ")
	}
}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 579; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */