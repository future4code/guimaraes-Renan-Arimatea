/*  EXERCÍCIO 02

Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
*/

let num1 = Number(process.argv[2])
let num2 = Number(process.argv[3])

let operacao = process.argv[4]
    
switch(operacao){
    case "soma":
        console.log(`A soma de ${num1} + ${num2} é: ${num1 + num2}`)
        break
    case "subt":
        console.log(`A subtração de ${num1} - ${num2} é: ${num1 - num2}`)
        break
    case "mult":
        console.log(`A multiplicação de ${num1} por ${num2} é: ${num1 * num2}`)
        break
    case "div":
        console.log(`A divisão de ${num1} por ${num2} é: ${num1 / num2}`)
        break
    default:
        console.log("Operação inválida. Tente novamente!")
}
