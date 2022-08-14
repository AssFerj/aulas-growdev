programa
{
	inclua biblioteca Texto -->t
	//Escreva um algoritmo que tenha como valores de entradas o 
	//nome e idade do usuário e imprima no terminal o nome e a 
	//quantidade de letras que o nome possui, bem como a idade e 
	//o ano de nascimento do usuário. Ex: “Nome: Pedro, 5 letras. 
	//Idade: 22 anos, nasceu em 2000”.
	funcao inicio()
	{
		cadeia nome
		inteiro idade, numeroDeLetras, anoNascimento

		escreva("Digite seu nome: ")
		leia(nome)

		escreva("Digite sua idade: ")
		leia(idade)

		anoNascimento = 2022 - idade

		numeroDeLetras = t.numero_caracteres(nome)
		escreva("\nNome: " + nome + ", " + numeroDeLetras + " letras.")
		escreva("\nIdade: " + idade + " anos, nasceu em " + anoNascimento)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 694; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */