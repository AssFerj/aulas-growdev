programa
{
	//Faça um algoritmo que simule um caixa eletrônico. 
	//Nesse algoritmo a conta do usuário deve ser criada já com 
	//um saldo positivo. O usuário precisa informar a quantidade 
	//de dinheiro que deseja retirar, esse valor deve ser um 
	//número positivo, múltiplo de 5 e menor do que o saldo. 
	//Cada saque eletrônico cobra uma taxa de R$4.50. Ao final 
	//deve ser informado o saldo da conta caso dê tudo certo com 
	//o saque, e se o usuário informar um valor maior que o saldo
	//deve ser informado ao usuário que o mesmo não tem dinheiro
	//suficiente em conta para realizar o saque.

	//OBS: Na verificação se o valor do saque é maior que o saldo 
	//deve ser considerado e contabilizado também o valor da taxa 
	//a ser cobrada pelo saque. Ou seja, o valor a ser sacado 
	//somado ao valor da taxa do saque não pode ser maior que o 
	//saldo disponível.
	funcao inicio() {
		real SaldoDisponivel
		inteiro ValorDoSaque
		
		SaldoDisponivel=1000
	
		escreva("Para operações de saque, lembre-se: Há uma taxa de R$4,5 por operação.\n")
		
		escreva("\nApenas notas de R$5 Disponíveis\n")
		
		escreva("\n Saldo Disponível:  ", SaldoDisponivel, "\n")
		
		escreva("\nInforme o valor do Saque: \n")
		leia(ValorDoSaque)
		
		
		    se (ValorDoSaque<SaldoDisponivel e ValorDoSaque%5==0)
		    {
		        SaldoDisponivel=(SaldoDisponivel-ValorDoSaque-4.5)
		        escreva("Sacando R$ "+ ValorDoSaque + ".\n" )
		        escreva ("Saldo Disponível: " + SaldoDisponivel+ "\n")
		        
		    }
		     senao{
		         escreva("O valor Solicitado é maior do que o valor disponível ou não é multiplo de 5")
		     }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1620; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */