class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  getDescription = (): string => this.description;
  getValue = (): number => this.value;
  getDate = (): string => this.date;
}

const novaTransacao = new Transaction("Primeira", 100, "agr");

novoUsuario.setTransaction(novaTransacao);
console.log(novoUsuario.getTransactions());
