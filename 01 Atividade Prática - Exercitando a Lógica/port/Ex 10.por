programa
{
	/*Escreva um algoritmo que percorra os números inteiros 
	 * entre 1 e 250 e verifique quais números são múltiplos 
	 * de 3 e quais são múltiplos de 5.*/
	funcao inicio()
	{
		inteiro i
		
		para (i=0; i<=250; i++)
		{
		    se(i%3==0)
		    {
		        escreva("\n" + i," número múltiplo de 3")
		    }
		    se(i%5==0)
		    {
		        escreva("\n"+ i+ " número múltiplo de 5\n")
		    }
	       
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 416; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */