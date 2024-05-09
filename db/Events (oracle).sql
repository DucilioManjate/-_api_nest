CREATE TABLE "House" (
  "id" INT GENERATED AS IDENTITY PRIMARY KEY,
  "nome" VARCHAR(255),
  "localizacao" VARCHAR(255),
  "contato" VARCHAR(255),
  "descricao" TEXT
);

CREATE TABLE "Artist" (
  "id" INT GENERATED AS IDENTITY PRIMARY KEY,
  "nome" VARCHAR(255),
  "genero" VARCHAR(255),
  "contato" VARCHAR(255),
  "biografia" TEXT,
  "videos" VARCHAR(255),
  "imagens" VARCHAR(255)
);

CREATE TABLE "Event" (
  "id" INT GENERATED AS IDENTITY PRIMARY KEY,
  "id_casa_de_eventos" INT,
  "id_artista" INT,
  "data" VARCHAR(255),
  "descricao" TEXT,
  "status" VARCHAR(255)
);

ALTER TABLE "Event" ADD FOREIGN KEY ("id_casa_de_eventos") REFERENCES "House" ("id");

ALTER TABLE "Event" ADD FOREIGN KEY ("id_artista") REFERENCES "Artist" ("id");
