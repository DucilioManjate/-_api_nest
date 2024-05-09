CREATE DATABASE IF NOT EXISTS vitrin_events;

USE vitrin_events;

CREATE TABLE IF NOT EXISTS House (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  localizacao VARCHAR(255),
  contato VARCHAR(255),
  descricao TEXT
);

CREATE TABLE IF NOT EXISTS Artist (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  genero VARCHAR(255),
  contato VARCHAR(255),
  biografia TEXT,
  videos VARCHAR(255),
  imagens VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Event (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_casa_de_eventos INT,
  id_artista INT,
  data VARCHAR(255),
  descricao TEXT,
  status VARCHAR(255),
  FOREIGN KEY (id_casa_de_eventos) REFERENCES House(id),
  FOREIGN KEY (id_artista) REFERENCES Artist(id)
);
