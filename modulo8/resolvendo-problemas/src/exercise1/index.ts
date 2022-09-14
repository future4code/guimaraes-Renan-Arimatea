function oneEdit(
    stringA: string, 
    stringB: string
    ): boolean {
        let res: boolean = Math.abs(stringB.length - stringA.length) > 1;
        let aMaiorB: boolean = stringA.length > stringB.length;
        let bMaiorA: boolean = stringB.length > stringA.length;
        let diferenca = 0

        if (res) return false

        if (aMaiorB) return stringA.includes(stringB)
        if (bMaiorA) return stringB.includes(stringA)

        for (let i = 0; i < stringA.length; i++) {
            let resposta = stringA[i] !== stringB[i]
            if (resposta){
                diferenca++
            }
        }

        return diferenca === 1
}
