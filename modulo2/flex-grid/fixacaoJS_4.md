``` JavaScript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
  let quantidade = 0

    for (let numero of arrayDeNumeros) {
        if (numeroEscolhido === numero) quantidade ++
    }

    if (quantidade === 0) return `Número não encontrado`
    else return `O número ${numeroEscolhido} aparece ${quantidade}x`
}

```
