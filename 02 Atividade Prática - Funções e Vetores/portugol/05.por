programa
{
	/*Crie uma função que recebe um valor inteiro e retorne 
	 * verdadeiro se é um valor perfeito ou falso se não for. 
	 * Um valor é dito perfeito quando ele é igual a soma dos 
	 * seus divisores excetuando ele próprio.
	 
	 Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus 
	 divisores*/
	funcao inicio() {
		inteiro n
		
		escreva("Informe um número: ")
		leia(n)
		
		se (e_perfeito(n)){
		    escreva("O número " + n + " é perfeito!\n\n")
		} senao {
		    escreva("O número " + n + " não é perfeito!\n\n")
		}
		
	}
	
	funcao logico e_perfeito(inteiro n){
	    logico perfeito
	    inteiro i = 1, divisores[n], resultado = 0
	    
        enquanto(i < n){
            se( n % i == 0){
                divisores[i-1] = i
            } senao {
                divisores[i-1] = 0
            }
            i++
        }
        
        para(inteiro j=0; j<i; j++){
            resultado += divisores[j]
        }
        
        se(resultado == n){
            retorne verdadeiro
        } senao {
            retorne falso
        }
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1057; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */