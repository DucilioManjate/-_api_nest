# Escolha uma imagem base do Node.js compatível com a versão que você está usando
FROM node:20.11.0

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos necessários do projeto para o contêiner
COPY ../package.json ../package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o resto do código-fonte para o contêiner
COPY ../ .

# Compilar o código TypeScript
RUN npm run build

# Expor a porta do servidor Nest.js
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "dist/main.js"]
