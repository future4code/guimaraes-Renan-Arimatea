const minhaString: string = "26";

const meuNumero: string | number = "26";

type Person = {
  name: string;
  age: number;
  color: Color;
};

enum Color {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
};

const userA: Person = {
  name: "Renan",
  age: 26,
  color: Color.VERDE,
};

const userB: Person = {
  name: "Mayara",
  age: 16,
  color: Color.LARANJA,
};

const userC: Person = {
  name: "João",
  age: 21,
  color: Color.VERMELHO,
};
