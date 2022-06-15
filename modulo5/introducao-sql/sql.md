#EXERCICIO 1

#a) o comando NOT NULL faz com que não seja permitido deixar o campo sem valor/vazio.

#b) SHOW DATABASES mostra os bancos existentes no sistema. SHOW TABLES mostra as tabelas que foram criadas.

#c) Mostra os detalhes da tabela informada pelo comando, como a sua estrutura e os tipos de dados de cada coluna.

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;


#Exercício 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

#a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

#b) Ao tentar inserir outra atriz com o mesmo id apareceu o error code 1062 = Duplicate entry "002" for key "PRIMARY" 
#entrada duplicada "002" para a chave primária.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Fernanda Montenegro",
2000000,
"1929-10-16",
"female"
);

#c) Foram passadas somente as colunas id, name e salary e com isso retornou o erro de código 1136 = Column count doesn't match value count at row 1
#a contagem de colunas não corresponde à contagem de valores da linha 1, pois haviam sido passadas 3 colunas e, com 5 valores.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Antônio Fagundes",
300000,
"1949-04-18",
"male"
);

#d) Faltou ser passada a coluna name e, ela foi definida como NOT NULL, ou seja, não pode ter valor nulo. Assim, foi gerado o erro de código 1364 = Field
#"name" doesn't have a default value = o campo "name" não tem um valor padrão.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Maria Fernanda Cândido"
"400000",
"1974-05-21",
"female"
);


#e) O valor da coluna birth_date é tipado como VACHAR, logo deveria estar entre parânteses por ser uma string. Assim, apareceu como erro de código 1292 = 
# Incorrect date value "1950" for column "birth_date" at row 1

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Maria Fernanda Cândido",
50000,
"1974-05-21",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"Marcos Palmeira",
400000,
"1963-08-19",
"male"
);

#EXERCICIO 3

##a)Escreva uma query que retorne todas as informações das atrizes
SELECT * from Actor WHERE gender = "female";

# b)Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT salary FROM Actor WHERE name = "Tony Ramos";

#c)Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". 
#Explique o resultado.
SELECT * from Actor WHERE gender = "invalid";

#d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor 
# máximo de R$500.000
SELECT id, name, salary FROM Actor WHERE salary < 500001;

#e) coluna desconhecida 'nenhum' na lista de campos
# a coluna 'name' estava escrito 'nome'
SELECT id, name from Actor WHERE id = "002"; 

