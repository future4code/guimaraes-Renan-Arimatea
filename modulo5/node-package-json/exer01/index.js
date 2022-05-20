/* EXERCICIO 01

a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?

    Resposta: Usamos o comando process.argv[] identificando as posições dos elementos.

*/

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura

const nome = process.argv[2]
let idade = Number(process.argv[3])
let novaIdade = idade + 7

console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)
