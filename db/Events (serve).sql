CREATE TABLE [House] (
  [id] INT PRIMARY KEY IDENTITY(1, 1),
  [nome] VARCHAR(255),
  [localizacao] VARCHAR(255),
  [contato] VARCHAR(255),
  [descricao] TEXT
)
GO

CREATE TABLE [Artist] (
  [id] INT PRIMARY KEY IDENTITY(1, 1),
  [nome] VARCHAR(255),
  [genero] VARCHAR(255),
  [contato] VARCHAR(255),
  [biografia] TEXT,
  [videos] VARCHAR(255),
  [imagens] VARCHAR(255)
)
GO

CREATE TABLE [Event] (
  [id] INT PRIMARY KEY IDENTITY(1, 1),
  [id_casa_de_eventos] INT,
  [id_artista] INT,
  [data] VARCHAR(255),
  [descricao] TEXT,
  [status] VARCHAR(255)
)
GO

ALTER TABLE [Event] ADD FOREIGN KEY ([id_casa_de_eventos]) REFERENCES [House] ([id])
GO

ALTER TABLE [Event] ADD FOREIGN KEY ([id_artista]) REFERENCES [Artist] ([id])
GO
