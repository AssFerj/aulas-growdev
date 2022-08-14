programa
{
	/*Crie uma função que recebe por parâmetro o tempo 
	 * de duração de uma fábrica expressa em segundos e 
	 * retorna esse tempo em horas, minutos e segundos.
	 	Ex:
		Entrada: 3672
		Saída: 1:1:12*/
	funcao inicio()
	{
		inteiro seg

		escreva("Digite a quantidade de segundos de trabalho: ")
		leia(seg)

		horas(seg)

		
	}
	funcao horas (inteiro conversao){
		
		inteiro h = conversao / 3600

		inteiro restoH = conversao % 3600

		inteiro m = restoH / 60

		inteiro restoM = restoH % 60

		escreva("\nO total de horas trabalhadas na fábrica foi: " + h + ":" + m + ":" + restoM)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 518; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */