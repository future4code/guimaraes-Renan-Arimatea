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
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
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