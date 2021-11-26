// ------------------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------------- //

/* 1. Leia o código abaixo:
    
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    
    a) Explique o que o código faz. Qual o teste que ele realiza?

        RESPOSTA: O código verifica se o número digitado pelo usuário é par, através do resto da divisão.
    
    b) Para que tipos de números ele imprime no console "Passou no teste"? 

        RESPOSTA: Para números pares
    
    c) Para que tipos de números a mensagem é "Não passou no teste"?

        RESPOSTA: Para números ímpares.

*/

/* 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
    a) Para que serve o código acima?

        RESPOSTA: Para o usário  saber o preço da fruta escolhido por ele.
    
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

        RESPOSTA: O preço da fruta Maçã é R$ 2.25
    
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

        RESPOSTA: Seria exibida a mensagem "O preço da fruta Pêra é R$ 5", pois o código não pararia de rodar.
*/

 /* 3. Leia o código abaixo:

     const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
     
     a) O que a primeira linha está fazendo?

        RESPOSTA: Está  atribuindo uma váriavel a resposta do usuário e armazenando a mesma na const numero
    
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

        RESPOSTA: Se o número fosse 10, a mensagem seria: "Esse número passou no teste", se fosse -10, daria erro que "mensagem" não está definido no código
    
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

        RESPOSTA: Sim, pois a váriavel "mensagem" é declarada, mas não é lida no código pois está fora do escopo do if
 */


// ------------------ EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------------- //

/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."
*/

function seraMaiorDeIdade () {

    const idadeDoUsuario = Number (prompt("Qual é a sua idade?"))

    if (idadeDoUsuario >= 18) {

        console.log("Você pode dirigir")

    } else {
        console.log("Você não pode dirigir.")
    }
}

seraMaiorDeIdade()

/* 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`   
*/

function verificarTurno ()  {

    const turnoDoUsusario = prompt("Em qual turno você estuda? Digite: M (matutino), V (vespertino) ou N (noturno)").toUpperCase()

    if (turnoDoUsusario === "M")  {

        console.log("Bom Dia!")

    } else if (turnoDoUsusario  === "V") {

        console.log("Boa Tarde!")

    } 
    
    else {

        console.log("Boa noite")

    }
}

verificarTurno()

/* 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.    
*/

function verificarTurnoDoAluno ()  {

    const turnoDoUsusario = prompt("Em qual turno você estuda? Digite: M (matutino), V (vespertino) ou N (noturno)").toUpperCase()

    switch (turnoDoUsusario) {

        case "M":
            console.log("Bom Dia!")
            break

        case "V":
            console.log("Boa Tarde!")
            break

        case "N":
            console.log("Boa Noite!")
            break
        
        default:
            console.log("O turno selecionado é inválido!")
    }
}

verificarTurnoDoAluno()

/* 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :(".
*/

const generoDoFilme  = prompt("Qual o gênero do filme?").toLowerCase()

const precoDoIngresso = Number (prompt("Qual o valor do ingresso?"))

const escolherLanche  = prompt("Qual lanchinho você vai comprar?")

function iraAssistir (genero, ingresso)  {

    if (genero === "fantasia"  && ingresso <  15) {

        console.log("Bom filme! e aproveite seu", escolherLanche, ";)")

    } else {

        console.log("Escolha outro filme  :(")
    }
}

iraAssistir(generoDoFilme, precoDoIngresso)


// --------------------------------- DESAFIOS ----------------------------------- //

/* 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.

    RESPOSTA ESTA NO EXERCÍCIO 04

*/


/* 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
    
    - Tabela de Preços
        
        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png)
        
*/
