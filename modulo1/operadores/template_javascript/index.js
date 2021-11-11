// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* 
1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2
    
    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    ---RESPOSTA: FALSE---
    
    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado)

    ----RESPOSTA: FALSE----
    
    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

    ---RESPOSTA: TRUE---
    
    console.log("d. ", typeof resultado)

    ---RESPOSTA: BOOLEAN---

*/
    
/*
2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")
    
    const soma = primeiroNumero + segundoNumero
    
    console.log(soma)

    ---RESPOSTA: OS DADOS RECEBIDOS PELO USUÁRIO ESTÃO SENDO ARMAZENADOS EM FORMTATO 'STRING', TEMOS QUE CONVERTÊ-LOS PARA 'NUMBER' DA SEGUINTE FORMA---

    let primeiroNumero = Number (prompt("Digite um numero!"))
    let segundoNumero = Number (prompt("Digite outro numero!"))
*/

/*
3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

---RESPOSTA---

    let primeiroNumero = Number (prompt("Digite um numero!"))
    let segundoNumero = Number (prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
*/


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

/*
1. Faça um programa que:

    a) Pergunte a idade do usuário

    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo).
*/

{

const idade = Number (prompt("Qual a sua idade?"))

const idadeAmigo = Number (prompt("Qual a idade do seu melhor amigo(a)?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", Boolean(idade > idadeAmigo))

console.log("A diferença da idade de vocês é de ", idade-idadeAmigo, " anos.")

}

/*
2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

{

    const par = Number (prompt("Insira um número par:"))

    const resultado = console.log( par % 2)

    // o resto da divisão é sempre 0 se o número inserido for par.

    // se o número inserido for ímpar, é apresentada a sobra da divisão.

}

/*
3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas
*/

{

    let idade = Number (prompt("Qual a sua idade?"))

    console.log("A sua idade em meses é: ", idade * 12, " meses")

    console.log("A sua idade em dias é: ", idade * 365, " dias")

    console.log("A sua idade em horas é: ", (idade * 365) * 24, " horas")

}

/*
4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    
    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true
    
    obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

{

    let numero1 = Number (prompt("Digite um número:"))

    let numero2 = Number (prompt("Agora digite outro número:"))

    console.log("O primeiro numero é maior que segundo?", Boolean (numero1 > numero2))

    console.log("O primeiro numero é igual ao segundo?", Boolean (numero1 === numero2))

    console.log("O primeiro numero é divisível pelo segundo?", Boolean (numero1 % numero2 === 0))

    console.log("O segundo numero é divisível pelo primeiro?", Boolean (numero2 % numero1 === 0))

}

// DESAFIOS

/*
1. Chegue aos resultados abaixo:

    a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

    b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

    c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

    d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
*/

{

    let temperatura1 = 77

    console.log("A temperatura de", temperatura1, "°F em Kelvin é: ", (temperatura1 - 32) * (5/9) + 273.15, " °K")

    let temperatura2 = 80

    console.log("A temperatura de", temperatura2, "°C em Fahrenheit é: ", (temperatura2) * (9/5) + 32, " °F")

    let temperatura3 = 30

    console.log("A temperatura de", temperatura3 ,"°C em Fahrenheit e Kelvin são: ", (temperatura3) * (9/5) + 32, " °F", temperatura3 + 273, "°K" )
    
    let temperatura4 = Number (prompt("Digite uma temperatura em Graus Celsius (°C)"))

    console.log("A temperatura de", temperatura4, "°C em Fahrenheit e Kelvin são: ", (temperatura4) * (9/5) + 32, " °F", temperatura4 + 273, "°K" )

}

/*
2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba  a quantidade de quilowatts consumida por uma residência.
    
    a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    
    b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
*/

{

    let consumo = 280

    console.log("O valor a ser pago pelo consumo de", consumo, "quilowatt-hora é de:", (consumo * 0.05), "R$")

    let valorPago = consumo  * 0.05
    let percentualDedesconto = 15
    let desconto = (valorPago * percentualDedesconto) / 100

    console.log("O valor a ser pago pelo consumo de", consumo, "quilowatt-hora, com", percentualDedesconto,"% de desconto é de:", valorPago - desconto, "R$")

}

/*
3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
    
    a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
    `20lb equivalem a X kg`
    
    b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
    `10.5oz equivalem a X kg`
    
    c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
    `100mi equivalem a X m`
    
    d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
    `50ft equivalem a X m`
    
    e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
    `103.56gal equivalem a X l`
    
    f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
    `450 xic equivalem a X l`
    
    g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter.
*/

{
    //a
    let medida = 20

    console.log("A medida de", medida, "lb equivalem a", medida/2.2046, "kg.")

    //b

    let medida2 = 10.5

    console.log("A medida de", medida2, "oz equivalem a", medida2/35.274, "kg.")

    //c
    let medida3 = 100

    console.log("A medida de", medida3, "mi equivalem a", medida3/0.00062137, "m.")

    //d
    let medida4 = 50

    console.log("A medida de", medida4, "ft equivalem a", medida4/3.2808, "m.")

    //e
    let medida5 = 103.56

    console.log("A medida de", medida5, "gal equivalem a", medida5/0.26417, "l.")

    //f
    let medida6 = 450

    console.log("A medida de", medida6, "xic equivalem a", medida6*0.24, "l.")

    //g

    let minhaMedida = Number (prompt("Digite um peso em libras (lb) para convertê-lo em quilogramas (kg): "))

    let minhaConversao = console.log(minhaMedida,"lb equivalem a", minhaMedida/2.2046, "kg")

}
