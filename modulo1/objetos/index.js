// ------------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -------------------------- //

/* 1.  Leia o código abaixo
    
    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }
    
    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])
    
    a) O que vai ser impresso no console?

    RESPOSTA: Matheus Nachtergaele , Virginia Cavendish , Globo 14h

*/

/* 2. Leia o código abaixo
    
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }
    
    const gato = {...cachorro, nome: "Juba"}
    
    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    
    a) O que vai ser impresso no console?

        RESPOSTA: 
            nome:"Juca",
            idade:3,
            raca:"SRD"
        
            nome:"Juba",
            idade:3,
            raca:"SRD"
        
            nome:"Jubo",
            idade:3,
            raca:"SRD"
    
    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

        RESPOSTA:  Faz a atribuição de "chave e "valor'.
*/

/* 3. Leia o código abaixo
    
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    
    a) O que vai ser impresso no console?

        RESPOSTA: false, undefined

    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

        RESPOSTA:  A  propriedade "altura" não está definida dentro do objeto "pessoa"
*/



// ---------------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO --------------------------  //

/* 1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
    
    // Exemplo de entrada
    const pessoa = {
       nome: "Amanda", 
       apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }
    
    // Exemplo de saída

    "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

    
    b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

*/

const pessoa = {

    nome: "Renan",
    apelidos:  ["Re", " Rene", " Arima"]

}

function  imprimeMensagem (pessoa) {

    
    return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}.`

}

console.log(imprimeMensagem(pessoa))


const novosApelidos = {

    ...pessoa,
    apelidos: ["Renes" , " Renanzinho", " Tea" ]

}

console.log(imprimeMensagem(novosApelidos))


/* 2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`

    - Exemplo
        
        const pessoa = {
        	nome: "Bruno", 
          idade: 23, 
        	profissao: "Instrutor"
        }
        
        minhaFuncao(pessoa)
        
        // Retorno: ["Bruno", 5, 23, "Instrutor", 9]

*/

const pessoa1 = {

    nome: "Renan",
    idade: 26,
    profissao: "Bancário"

}

const pessoa2 = {

    nome: "Maria",
    idade: 29,
    profissao: "Professora"

}

function meuArray (parametro) {

    
    return [parametro.nome, parametro.nome.length, parametro.idade, parametro.profissao, parametro.profissao.length]
    
}

console.log(meuArray(pessoa1))

console.log(meuArray(pessoa2))


/* 3. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
    c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
            
    d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
    
*/

let carrinho = []

const uva = {

    nome: "Uva",
    disponibilidade: true

}

const abacate = {
    
    nome: "Abacate",
    disponibilidade: true

}

const melao = {
    
    nome: "Melão",
    disponibilidade: true

}

function compras (fruta) {

   carrinho.push(fruta)

   return carrinho

}

console.log("carrinho", compras(uva))
console.log("carrinho", compras(abacate))
console.log("carrinho", compras(melao))



// -------------------------- DESAFIOS ------------------------------ //

/* 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**

    - Exemplo
        
        // Exemplo de entrada: "Lais", 26, "Instrutora"
        // O que deve ser impresso no console: 
        { nome: 'Lais', profissao: "Instrutora", idade: 26}

*/

function informacoesDoUsuario () {

    const pergunta01 = prompt("Qual o seu nome?")
    const pergunta02 = prompt("Qual a sua idade?")
    const pergunta03 = prompt("Qual a sua profissão?")


    return respostas = {
        nome: pergunta01,
        idade: pergunta02,
        profissao: pergunta03
    }
}

console.log(informacoesDoUsuario())


/* 2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
    

    O primeiro filme foi lançado antes do segundo? false
    O primeiro filme foi lançado no mesmo ano do segundo? true

*/

function filmes () {

    const filme1 = {
        ano: 2013,
        titulo: "Guerra Mundial  Z"
    }

    const filme2 = {
        ano: 2013,
        titulo: "The Purge"
    }

    return console.log(`O primeiro filme foi lançado antes do segundo?`, Boolean(filme1.ano < filme2.ano))
    , console.log(`O primeiro filme foi lançado no mesmo ano do segundo?`, Boolean(filme1.ano == filme2.ano))

}

filmes()

/* 3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido.

*/


function controleSacolao (fruta) {
    

    return fruta = {
    
        nome: fruta.nome,
        disponibilidade: false
    
    }
    
    //fruta.disponibilidade = false
}

console.log("Disponibilidade do item: " , controleSacolao(melao))
