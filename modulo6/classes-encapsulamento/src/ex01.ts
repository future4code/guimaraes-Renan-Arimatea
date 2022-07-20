//-------------------- Exercicio 1 ---------------------------------------//

// a) O construtor é usado para especificar quais informações queremos receber da instância da classe. Usamos a     palavra-chave "construtor" para chamar

// b) A mensagem foi impressa uma vez

// c) Podemos obter acesso a partir do método


class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  getCpf = (): string => this.cpf;
  getName = (): string => this.name;
  getAge = (): number => this.age;
  getBalance = (): number => this.balance;
  getTransactions = (): Transaction[] => this.transactions;

  setTransaction = (newTransaction: Transaction): void => {
    this.transactions.push(newTransaction);
  };
}

const novoUsuario = new UserAccount("08957032541", "Célio Júnior", 20);
