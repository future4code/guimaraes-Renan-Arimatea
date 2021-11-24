// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  const altura = prompt("Digite  a altura: ")
  const largura = prompt("Digite a largura: ")
  const area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  
  const anoAtual = prompt("Qual o ano atual?")
  const anoDeNascimento = prompt("Qual seu ano de nascimento?")
  const idade = anoAtual  -  anoDeNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Qual o seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  const cor1 = prompt("Fale sua primeira cor favorita:")
  const cor2 = prompt("Fale sua segunda cor favorita:")
  const cor3 = prompt("Fale sua terceira cor favorita:")

  const cores = [cor1,cor2,cor3]

  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  

  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return (string1 >= string2)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array.shift()

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  let array0 = []
  array0 = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = array0

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  
  const anoAtual = prompt("Qual o ano atual?")
  const anoDeNascimento = prompt("Qual o seu ano de nascimento?")
  const anoDoRg = prompt("Qual o ano de emissão do seu RG?")

  const idade = anoAtual - anoDeNascimento
  const idadeDoc = anoAtual - anoDoRg

  const condicao01 = idade <= 20
  const condicao02 = idade >= 21 & idade <= 50
  const condicao03 = idade > 50

  const comparativo01 = idadeDoc >= 5
  const comparativo02 = idadeDoc >= 10
  const comparativo03 = idadeDoc >= 15

  const teste = Boolean (condicao01 & comparativo01 || condicao02 & comparativo02 || condicao03  & comparativo03)

  console.log(teste)
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  const condicao01 = (ano % 4 == 0)
  const condicao02 = (ano % 100 != 0)
  const condicao03 = (ano % 400 == 0)

  return Boolean (condicao01 && condicao02 || condicao03)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  const pergunta1 = prompt("Você tem mais de 18 anos?")
  const pergunta2 = prompt("Você possui ensino médio completo?")
  const pergunta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(Boolean(pergunta1 == "sim" && pergunta2 == "sim" && pergunta3 == "sim"))
}
