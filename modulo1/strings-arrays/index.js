//  EXERCÍCIOS DE INTERPRETAÇÃO

/* 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    let array
    console.log('a. ', array) RESPOSTA: UNDEFINED

    array = null
    console.log('b. ', array) RESPOSTA: NULL

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] RESPOSTA: 11
    console.log('c. ', array.length)

    let i = 0
    console.log('d. ', array[i]) RESPOSTA: 3

    array[i+1] = 19
    console.log('e. ', array) RESPOSTA: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const valor = array[i+6] RESPOSTA: 9
    console.log('f. ', valor)
*/

/* 2. Leia o código abaixo com atenção 
    
    const frase = prompt("Digite uma frase")
    
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    
    Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

    RESPOSTA: SUBI NUM ÔNIBUS EM MARROCOS 27
*/

//  EXERCÍCIOS DE ESCRITA

{

    /* 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
        
        O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */


    let nome = prompt("Qual é o seu nome?")
    let email = prompt("Qual é o seu e-mail?")

    console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda(o), ${nome}!`)

}

{

    /* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista */

    const comidasFavoritas  = ['bife', 'macarrão', 'lasanha', 'camarão', 'coraçãozinho']
    console.log(comidasFavoritas)

    console.log(`Essas são as minhas comidas preferidas:`)
    console.log(comidasFavoritas[0])
    console.log(comidasFavoritas[1])
    console.log(comidasFavoritas[2])
    console.log(comidasFavoritas[3])
    console.log(comidasFavoritas[4])

    let minhasComidasFavoritas  = ['bife', 'macarrão', 'lasanha', 'camarão', 'coraçãozinho']
    let suaComidaFavorita = prompt("Qual a sua comida favorita?")
    minhasComidasFavoritas.splice(1, 1, suaComidaFavorita)
    console.log(minhasComidasFavoritas) 

}

{
    /* 3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console. */
    
    let listaDeTarefas = []

    let tarefa1 = prompt("Primeira tarefa: ")
    listaDeTarefas.push(tarefa1)

    let tarefa2 = prompt("Segunda tarefa: ")
    listaDeTarefas.push(tarefa2)

    let tarefa3 = prompt("Terceira tarefa: ")
    listaDeTarefas.push(tarefa3)

    console.log(listaDeTarefas)

    let indice = Number (prompt("Escolha a sua tarefa realizada: (1, 2 ou 3)"))
    
    listaDeTarefas.splice(indice -1, 1)
    console.log(listaDeTarefas)

}

//  DESAFIO

{

    /* 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

    2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array */

    let frase = prompt("Digite uma frase")
    console.log(frase)

    let array = frase.split(" ")
    console.log(array)

    let listaDeFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    let indice = listaDeFrutas.indexOf("Abacaxi")
    console.log(indice)
    
    let comprimento = listaDeFrutas.length
    console.log(`comprimento: ${comprimento}`)
}