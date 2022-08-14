programa
{
	//Pedro tem 1,50m de altura e cresce 2 centímetros por ano, 
	//enquanto Lucas tem 1,10m de altura e cresce 3 centímetros 
	//por ano. Construa um algoritmo que calcule e imprima 
	//quantos anos serão necessários para que: 
	//a. Lucas e Pedro tenham o mesmo tamanho;
	//b. Lucas seja maior que Pedro.

	inclua biblioteca Matematica-->m
	funcao inicio()
	{
		real altPedro = 1.5, altLucas = 1.1, cresc_pedro = 0.02, cresc_lucas = 0.03
		inteiro ano = 0

		enquanto (altPedro >= altLucas) {
		altPedro = m.arredondar(altPedro + cresc_pedro,2)
		altLucas = m.arredondar(altLucas + cresc_lucas,2)
		ano++
		se (altLucas == altPedro){
				escreva("\nLucas e Pedro tem a mesma altura depois de " + ano + " anos.")
			}
		}
         escreva("\nLucas é maior que pedro depois de " + ano + " anos.")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 629; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */