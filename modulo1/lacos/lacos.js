// --------------------------------- EXERCÍCIO 01 ------------------------------------  //

{

let input

let soma = 0

while (input !== 0) {

    input = Number(prompt("Insira um número:"))

    soma += input

}

console.log(soma)

}

// --------------------------------- EXERCÍCIO 02 ------------------------------------  //

{

    // i < numeros.length
    // i <= numeros.length -1

    const numeros  = [10, 4, 3, 6, 8, 7, 21, 14, 2]

    for (let i  = 0; i < numeros.length; i++) {

        console.log("Elemento:" +numeros[i])

        console.log("Indice:" +i)

    }

}

// --------------------------------- EXERCÍCIO 03 ------------------------------------  //

{

    const arrayNumeros = [11, 15,  18,  14, 12, 13]

    let maior = 0

    function maiorNumero(array) {

        for (let indice = 0; indice < array.length; indice++) {

            if (array[indice] > maior) {

                maior = array[indice]
            }
        }

        return maior
    }

    console.log(maiorNumero(arrayNumeros))

}

// --------------------------------- EXERCÍCIO 04 ------------------------------------  //

{

    const arrayNumeros = [11, 15,  18,  14, 12, 13]

    let maior = 0

    for (let banana of arrayNumeros)  {

        if (banana > maior) {

            maior = banana
        }
    }

    console.log(maior)

}

{

    const arrayNumeros = [11, 20, 15,  18,  14, 12, 13]

    let maior = 0

    function maiorNumero(array) {

        for (let indice of array) {

            if (indice > maior) {

                maior = indice
            }
        }

        return maior
    }

    console.log(maiorNumero(arrayNumeros))

}

// --------------------------------- EXERCÍCIO 05 ------------------------------------  //

{

    const arrayPalavras = ["Oi", "sumido,", "tudo", "bem?", "Saudades"]

    let mensagem = ""

    function concatenarFrase(array) {

        for (let palavra of array) {

            mensagem += palavra + " "
        }

        return mensagem
    }

    console.log(concatenarFrase(arrayPalavras))
}
