// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

   return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    return array.sort(function(a , b){

        return a-b
    })
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
    const analisaPar= (array) => {

        if (array % 2 === 0)
        
        return true
    }

    return array.filter(analisaPar)

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let novoArray = []

    for (let num of array) {

        if (num % 2 === 0) {

            novoArray.push(Math.pow(num,2))
        }
    }
    
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    return array.reduce(function(a,b) {

        return Math.max(a,b)
    })
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero = undefined
    let menorNumero = undefined
    let maiorDivisivelPorMenor = undefined
    let diferenca = undefined

    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {

        maiorNumero = num2
        menorNumero = num1
    }

    if (maiorNumero % menorNumero === 0) {

        maiorDivisivelPorMenor = true
    } else {
        maiorDivisivelPorMenor = false
    }

    diferenca = maiorNumero - menorNumero

    return {
        
        "maiorNumero": maiorNumero,
        "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
        "diferenca": diferenca
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
    let numeroPar = []
    
    for (let i = 0 ; numeroPar.length < n ; i++) {

        if (i % 2 === 0) {

            numeroPar.push(i)
        }
    }

    return numeroPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC & ladoC === ladoA) {

        return "Equilátero"
    }

    else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {

        return "Escaleno"
    }

    else {

        return "Isósceles"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
    const novoArray = array.sort(function comparaNumeros (num1, num2) {

        return num1 - num2
    })

    return [novoArray[novoArray.length - 2], novoArray[1]]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
    const filmeDiaboVestePrada = {

        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }

    return(`Venha assistir ao filme ${filmeDiaboVestePrada.nome}, de ${filmeDiaboVestePrada.ano}, dirigido por ${filmeDiaboVestePrada.diretor} e estrelado por ${filmeDiaboVestePrada.atores[0]}, ${filmeDiaboVestePrada.atores[1]}, ${filmeDiaboVestePrada.atores[2]}, ${filmeDiaboVestePrada.atores[3]}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    
    let anonimo = {...pessoa, nome: "ANÔNIMO"}

    return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
    const pessoasAutorizadas = pessoas.filter((pessoa) => {

        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {

        return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return pessoasNaoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}