programa
{
	
	funcao inicio()
	{
		inteiro idade
		real peso

		escreva("Qual a sua idade? ")
		leia(idade)
		
		escreva("Qual o seu peso? ")
		leia(peso)

		se (idade <=12)   
        {  
        escreva("Sua categoria é Infantil\n") 
        }  
        senao se (idade >=13 e idade <=16 e peso <=40)  
        {  
        escreva ("Sua Categoria é Juvenil leve \n" )
        }  
        senao se ( idade >=13 e idade <=16 e peso >40)
        {  
        escreva ("Sua Categoria é Juvenil Pesado \n")  
        }  
        senao se ( idade >=17 e idade <=24 e peso <=45)
        {  
        escreva ("Sua Categoria é Senior Leve\n")  
        }  
        senao se ( idade >=17 e idade <=24 e peso >45 e peso <=60)
        {  
        escreva ("Sua Categoria é Senior Médio \n")  
        }  
        senao se ( idade >=17 e idade <=24 e peso >60)
        {  
        escreva ("Sua Categoria é Senior pesado \n")  
        }  
        senao
        {  
        escreva ("Sua Categoria é Veterano")  
        }
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 941; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */