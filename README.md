# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso Backend?
<br> R: JavaScript

- O que é o Node.js?
<br>R: É uma runtine que roda o JavaScript no terminal, usado para subir o servidor na web.

- O que é o NPM?
<br> R: Node Package Manager (Gerenciador de Pacotes Node), uma biblioteca de pacotes  node.js para uso público em aplicações.

- O que é o Express.js?
<br> R: Um framework JavaScript utilizado para a construção de API's e aplicações back-end web.

- O que é uma API? (Aplication Programming Interface)
<br> R: Um conjunto de endpoints utilizado para resposta de aquisições HTTP.

- Como mudar o formato de importação de "require" (padrão commonjs) para module?
<br> R: Mudando o valor dentro de "type-module" no packet.json

- O que é HTTP? (Hypertext Transfer Protocol)
<br> R: Um protocolo de transferência de Hipertexto entre o front e backend.

- Quais os métodos de requisição HTTP e para que serve cada um deles?
<br> R: GET (buscar ou trazer informações do backend para o frontend), POST (guardar informações no backend), PUT (atualizar dados de forma completa em um determinado registro), PATCH (atualizar dados parcialmente) e DELETE (remover um recurso específico permanentemente).

- Para que serve o --watch ao rodar o servidor?
<br> R: Serve para monitorar arquivos em um servidor, para que caso haja alguma alteração no código, ele atualizar o servidor automaticamente.

- Para que serve o Router do Express?
<br> R: Para melhor organiazão e manutenção do projeto, permitindo um maior nível de escalabilidade.

- O que é um padrão de projeto?
<br> R: São tecnicas de programação amplamente conhecidas utilizadas para organizar e estruturar códigos.

- O que é o padrão de projeto MVC?
<br> R: É um padrão de projeto composto por 3 camadas com suas devidas responsabilidades.

- Qual a responsabilidade de cada Camada?
<br> R: 1. MODEL (Regra de Negócio e Acesso ao Banco de Dados), 2. VIEW (Camada de Apresentação e Interface do usuário), 3. CONTROLLER (Controle de fluxo da aplicação relacionado a entrada e processamento)

- O que é um ORM? (Object-Relational Mapper)
<br> R: É uma biblioteca que cria o mapeamento e conecta o banco de dados a diferentes linguagens, podendo acessar o banco diretamente nela.

- Quais as vantagens de utilizar um ORM?
<br> R: A utilização de uma ORM aumenta a produtividade, pois elimina a necessidade de escrever SQL repetitivo para operações CRUD.

- Como utilizar parâmetros da Url?
<br> R: é feito através do seu sistema de roteamento, que permite definir rotas dinâmicas, parâmetros de consulta (query strings) e correspondência baseada em padrões.

- O que é Middleware? (Exemplo Logger)
<br> R: Padrão de projetos utiizado pelo express para separar o padrão de projetos por blocos, cada função sendo executada sequencialmente.


# Comandos NPM
- npm init
- npm i (nome do pacote)

# Comandos Prisma

Instalação
- npm i prisma -D
- npm i dotenv -D
para Mysql e Mariadb 
npm install @prisma/client @prisma/adapter-mariadb mariadb

Inicia o Prisma
- npx prisma init --datasource-provider mysql --output ../generated/prisma

Gera o banco de dados a partir do schema do prisma
- npx prisma db push

Gera o schema do prisma a partir do banco de dados
- npx prisma db push

Gerar as funções para interagir com os modelos mapeados no schema
- npx prisma generate
