``` javascript

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

    let salario = 2000
    
    let comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)

    let salarioFinal = salario + comissao
 
    return salarioFinal 
}```
