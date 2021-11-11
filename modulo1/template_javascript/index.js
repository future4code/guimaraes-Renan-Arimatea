/* 1- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa. */

let a1 = 10
let b1 = 10

console.log(b1)

b1 = 5
console.log(a1, b1)

// No primeiro console.log será impresso o resultado 10
// No segundo console.log será impresso o resultado 10 e 5 (pois foi substituido o valor da variavel b)

/* 2- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa. */

let a2 = 10
let b2 = 20
c2 = a2
b2 = c2
a2 = b2

console.log(a2, b2, c2)

// O resultado exibido será 10 10 10, pois de acordo com as  declarações c=10 b=10 a=10

/* 3- Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais. */

/* let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) */

//Resposta

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioDia/horasTrabalhadas} por hora`)




// EXERCÍCIOS DE ESCRITA DE CÓDIGO

/* 1. Construa um programa, seguindo os seguintes passos:
    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
         
    f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    
    g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu. */


/* let nome
let idade

console.log (typeof nome, typeof idade) */

// Foi obtido o typeof undefined para as  duas variaveis pois as mesmas não foram definidas previamente e estão aguardado receber os dados.

let nome = prompt('Qual o seu nome?')
let idade = prompt("Qual é a sua idade?")

console.log(typeof nome, typeof idade)

// A resposta neste caso foi string string, pois as respostas foram interpretadas como dados textuais.

console.log("Olá!", nome, "você tem", idade, "anos")



/* 2- Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

a) Crie três novas variáveis, contendo as respostas;

b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

    Você está usando uma roupa azul hoje? - SIM

*/
alert("Nas questões a  seguir responda somente com SIM ou NÃO")
let nacionalidade = prompt("Você é brasileiro?")
let maioridade = prompt("Você tem mais de 18 anos?")
let exposicao = prompt("Você se declara uma Pessoa Politicamente Exposta (PEP)?")

console.log("Você é brasileiro? " + nacionalidade)
console.log("Você tem mais de 18 anos? " + maioridade)
console.log("Você se declara uma Pessoa Politicamente Exposta (PEP)? " + exposicao)



/* 3- Suponha que temos duas variáveis a & b, cada uma com um valor inicial

let a = 10
let b = 25

Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

let a = 10
let b = 25

Aqui faremos uma lógica para trocar os valores

Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).
*/

let x
let a = 10
let b = 25

x = a
a = b
b = x

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)



/* DESAFIO

1. Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
    
    1. O primeiro número somado ao segundo número resulta em: x.
    2. O primeiro número multiplicado pelo segundo número resulta em: y.

*/

let numero1 = prompt("Digite um número:")
let numero2 = prompt("Agora digite outro:")


let soma = Number (numero1) + Number (numero2)

let multiplicacao  = numero1 * numero2

console.log("A soma dos dois número é: ", soma)
console.log("A multiplicação dos dois números é: ", multiplicacao)
