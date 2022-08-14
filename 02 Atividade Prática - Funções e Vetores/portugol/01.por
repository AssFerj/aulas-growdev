programa
{
	/*Crie uma função que recebe 3 notas de um aluno por 
	 * parâmetro e uma letra. Se a letra for A a função deve 
	 * calcular a média aritmética, se for P, a média 
	 * ponderada (peso: 5, 3 e 2).*/
	funcao inicio()
	{
		inteiro nota1, nota2, nota3
		cadeia letra

		escreva("Digite sua primeira nota: ")
		leia(nota1)
		escreva("Digite sua segunda nota: ")
		leia(nota2)
		escreva("Digite sua terceira nota: ")
		leia(nota3)
		escreva("Digite A para média aritmética e P para média ponderada: ")
		leia(letra)

		se (letra == "A"){
			escreva("Sua média aritmética é: ", calculaA (nota1, nota2, nota3))          // Chama a função no escreva
		}
		senao se (letra == "P"){
			escreva("Sua média ponderada é: ", calculaP (nota1, nota2, nota3))
		}senao se(letra != "A" e letra != "P"){
			escreva("O operador deve ser digitado em maiúsculo e só poderá ser A ou P")
		}


    }

    funcao inteiro calculaA (inteiro nota1, inteiro nota2, inteiro nota3)
    {
		inteiro resultado

		resultado = (nota1 + nota2 + nota3) / 3

		retorne resultado
    }

    funcao inteiro calculaP (inteiro nota1, inteiro nota2, inteiro nota3)
    {
		inteiro resultado

		resultado = (nota1 * 5 + nota2 * 3 + nota3 * 2) / (5 + 3 + 2)

		retorne resultado
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 210; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */