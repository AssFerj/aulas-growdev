programa
{
	/*Crie uma função que recebe por parâmetro um valor 
	 * inteiro e positivo e retorne verdadeiro se o número for 
	 * primo ou falso se não for.*/
	funcao inicio(valor)
	{
		inteiro numero, numeroDiv = 1, contador = 3

		escreva("Informe um número: ")
		leia(numero)

        se(numero < 0) {
           escreva("tem que ser maior ")
        } senao se(numero == 2) {
           escreva("Número primo")
        } senao se(numero % 2 == 0 ) {
            escreva("Número nao é primo")
        } 
        senao {
            enquanto(contador <= numero) {
                se(numero % contador == 0) {
                    numeroDiv++
                }
                contador += 2
            }
              se(numeroDiv > 2) {
              escreva("nao primo")
            } senao{
              escreva("é primo")
            }
        }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 278; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */