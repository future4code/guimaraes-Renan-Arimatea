//  EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* 1. Leia o código abaixo
    
    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    
    a) O que vai ser impresso no console?

        RESPOSTA: Será impresso os valores 10 e 50.

    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

        RESPOSTA: A função ainda funcionaria, porém sem imprimiros resultados no terminal.
*/

/* 2. Leia o código abaixo
    
    let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    
    a. Explique o que essa função faz e qual é sua utilidade

        RESPOSTA: a função verifica se a resposta inserida pelo usuário tem a palavra cenoura, retornando um resultado verdadeiro ou falso.

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`

            RESPOSTA: true

         ii.  `CENOURA é bom pra vista`

            RESPOPSTA: true

         iii. `Cenouras crescem na terra`

            RESPOSTA: true
*/

//  EXERCÍCIOS DE ESCRITA DE CÓDIGO

/* 1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
    
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

*/

function imprimirNome( ) {

    return("Eu sou Renan, tenho 26 anos, moro em Ponta Grossa e sou bancário.")
    
}

console.log(imprimirNome())

function informacoes ( ) {
    nome = "Renan"
    idade  = 26
    cidade = "Ponta Grossa"
    profissao = "Bancário"

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`

}

console.log (informacoes())


/* 2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas. */

function soma (n1,n2) {
   return n1 + n2
}

console.log (soma(5,10))

function isTrue (n1,n2) {
    return Boolean (n1>= n2)
}

console.log (isTrue(2,4))

function isEven (n1) {
    return Boolean (n1 % 2 == 0)
}

console.log(isEven(4))

function mensagem (minhaMensagem) {

    return `${minhaMensagem.length} , ${minhaMensagem.toUpperCase()}`
    
}

console.log(mensagem("Hello World"))

/* 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10

*/

{
    const n1 = Number (prompt("Digite um número: "))
    const n2 = Number (prompt("Digite outro número: "))

    function soma () {
        return n1 + n2
    }

    function subtracao () {
        return n1 - n2
    }

    function multiplicacao () {
        return n1 * n2
    }

    function  divisao () {
        return n1 / n2
    }

}

console.log(soma(), subtracao(), multiplicacao(), divisao())

//  DESAFIOS

/* 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    
    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
*/


const imprimirSigno = signo => {

    return signo
}

console.log (imprimirSigno("Libra"))



const novaSoma = (n1,n2) => n1 + n2

console.log(novaSoma(10,5))

/* 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. */


function teoremaDePitagoras (b, c) {
    const catetoOposto = b * b
    const catetoAdjascente = c * c
    const somaDosCatetos = catetoOposto  + catetoAdjascente

    return Math.sqrt(somaDosCatetos)
}

console.log(teoremaDePitagoras(30,40))
