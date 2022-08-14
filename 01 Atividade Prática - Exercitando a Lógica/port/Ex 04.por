programa
{
	//Escreva um algoritmo que solicite pelo terminal 2 números e uma operação matemática. O algoritmo deve realizar o cálculo com os 2 números digitados conforme a operação informada.
	funcao inicio()
	{	
		caracter operador
		real soma, sub, mult, div
		real n1, n2
		
		escreva("Insira um número: \n")
		leia(n1)

		escreva("Insira um novo número: \n")
		leia(n2)

		limpa()

		escreva("Digite uma das operações: \n")
		escreva("+ para somar \n")
		escreva("- para subtrair \n")
		escreva("* para multiplicar \n")
		escreva("/ para dividir \n")
		leia(operador)

		limpa()

		se(operador == '+'){
			soma = n1 + n2 
			escreva("O resultado da soma é: " + soma)
		}senao se(operador == '-'){
			sub = n1 - n2
			escreva("O resultado da subtração é: " + sub)
		}senao se(operador == '*'){
			mult = n1 * n2
			escreva("O resultado da multiplicação é: " + mult)
		}senao se(operador == '/'){
			div = n1 / n2	
			escreva("O resultado da divisão é: " + div)
		}senao{
			escreva("Operação inválida!!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1017; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */