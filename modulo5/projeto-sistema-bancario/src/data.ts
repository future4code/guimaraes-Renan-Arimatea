export type Client = {
    name: string,
    cpf: string,
    date_of_birth: string,
    balance: number,
    bank_statement:Transaction[]
}

export type Transaction = {
    date: string,
    amount: number,
    description: string
}

export let clients:Client[] = [
    {
        name: "Kimi Ruas Liberato",
        cpf: "87325808003",
        date_of_birth: "21/01/1963",
        balance: 150,
        bank_statement: []
    },
    {
        name: "Tatiana Mendes Manso",
        cpf: "59522695084",
        date_of_birth: "15/04/1949",
        balance: 25000,
        bank_statement: []
    },
    {
        name: "Christian Sobral Aranha",
        cpf: "66811455071",
        date_of_birth: "11/06/1970",
        balance: 32000800,
        bank_statement: []
    },
    {
        name: "Nicollas Barbosa Viana",
        cpf: "49853749033",
        date_of_birth: "01/03/1950",
        balance: 21000000,
        bank_statement: []
    },
    {
        name: "Andressa Vital Gabeira",
        cpf: "95298636080",
        date_of_birth: "22/05/1988",
        balance: 4300000,
        bank_statement: []
    }
] 