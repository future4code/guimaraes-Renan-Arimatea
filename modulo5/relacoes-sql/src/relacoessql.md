### Exercício 01

a) 

Campo que estabelece o relacionamento entre duas tabelas.

b)

CREATE TABLE Comentarios (
        id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
        rate FLOAT NOT NULL,
    filmes_id VARCHAR(255),
    FOREIGN KEY (filmes_id) REFERENCES filmes(id)
);

INSERT INTO Comentarios VALUES(
"005", "The best movie ever!", 10, 005
);

INSERT INTO Comentarios VALUES(
"003", "Great movie!", 8, 003
);


c)

Error Code: 1452. Erro na foreign key (inexistente)!

d)

ALTER TABLE filmes DROP COLUMN avaliacao;


e)

Cannot delete or update a parent row: a foreign key constraint fails 
Algo sobre chaves estrangeiras não permite excluir arquivos integrados ao banco de dados



### Exercicio 02 

a) Tabela movie integra o ator da tabela actor com o filme na tabela movie

b) 

CREATE TABLE movieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movie(id),
    FOREIGN KEY (actor_id) REFERENCES actor(id)
);


INSERT INTO movieCast(movie_id, actor_id)
VALUES(
		"001",
    "001"
);

INSERT INTO movieCast(movie_id, actor_id)
VALUES(
		"001",
    "002"
);

INSERT INTO movieCast(movie_id, actor_id)
VALUES(
		"002",
    "004"
);

INSERT INTO movieCast(movie_id, actor_id)
VALUES(
		"003",
    "007"
);

INSERT INTO movieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);

INSERT INTO movieCast(movie_id, actor_id)
VALUES(
		"004",
    "005"
);

INSERT INTO movieCast(movie_id, actor_id)
VALUES(
		"005",
    "020"
);

c) 

Cannot add or update a child row: a foreign key constraint fails
Não é possível integrar algo em um banco de dados que não existe em outros bancos de dados vinculados

d) 

ALTER TABLE movie DROP COLUMN rating;

e) 
Cannot delete or update a parent row: a foreign key constraint fails 
Não se pode deletar um usuario que esteja integrado em outro banco de dados

### Exercicio 03

a) 

Traz os resultados da tabela de movies e da tabela de avaliação. On irá definir o grupo.

b) 

SELECT m.id as movie_id, r.rate as rating FROM movie m
INNER JOIN rating r ON m.id = r.movie_id;
