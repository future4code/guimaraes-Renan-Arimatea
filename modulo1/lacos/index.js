// ------------------------------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ------------------------ //

/* 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)

    RESPOSTA: ESTA  ADCIONANDO O VALOR 5 A VARIAVEL VALOR. SERÁ IMPRESSO NO CONSOLE O RESULTADO 10
*/

/* 2. Leia o código abaixo:
    
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    
    a) O que vai ser impresso no console?

    RESPOSTA: SERÁ IMPRESSO 19 21 23 25 27 30
        
    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

    RESPOSTA:
    
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

        for (let i  = 0; i < lista.length; i++) {

            console.log("Elemento:" +lista[i])

            console.log("Indice:" +i)
        }

*/

/* 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }

    RESPOSTA: O RESULTADO IMPRESSO PARA A ENTRADA 4 SERIA:

    *
    **
    ***
    ****
*/


// ------------------------------ EXERCÍCIOS DE ESCRITA DE CÓDIGO ----------------------------- //

/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    
    c) Por fim, imprima o array com os nomes dos bichinhos no console
*/

const bichinhos = Number(prompt("Quantos bichinhos você tem?"))

let arrayNome = []

if (bichinhos === 0) {

    console.log("Você pode adotar um pet")

} else if (bichinhos > 0) {

    for (let i=0; i < bichinhos; i++) {

        arrayNome.push(prompt("Qual o nome do seu pet?"))

    }

    console.log("Os nomes são:", arrayNome)

}

/* 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
*/


const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

const imprimeArray = (array) => {

    console.log(arrayOriginal)

}


const maiorMenor = (array) => {

    let maiorNum = 0
    let menorNum = Infinity

    for (let i=0; i < array.length; i++) {

        if (array[i] < menorNum) {

            menorNum = array[i]

        } else if (array[i] > maiorNum){

            maiorNum  = array[i]

        }
    }

    console.log("O menor número é: ", menorNum)
    console.log("O maior número é: ", maiorNum)
}

maiorMenor(arrayOriginal)