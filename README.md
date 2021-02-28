# orm_comparation 

Esse projeto foi construído como forma de testar e analisar algumas bibliotecas do mercado para uso e maninupulação de banco de dados no Node.js. As bibliotecas estudadas foram [pg] (Node-postgres), [Knex.js], [Sequelize] e [TypeORM]. O banco de dados utilizado foi o [PostgreSQL], além de [TypeScript] na construção de um CRUD simples de usuários.

## Requisitos

* [Node.js] - Nodejs 10 ou superior;
* [Postman] ou [Insomnia] - Cliente HTTP para efetuar requisiçõs à API;

## Instalação

Após clonar este projeto, é necessário criar um banco de dados que será utilizado no projeto. Cada uma dos 4 exemplos de código possui um arquivo *index.ts* localizado em *src/database*, onde você pode alterar a configuração de conexão com suas as respectivas informações. 
Agora, conforme desejar executar cada um dos exemplos, acesse o diretório através de seu terminal de comandos e execute *npm install* para que as dependências necessárias ao projeto sejam baixadas. Em seguida, execute o comando *npm start* para que o servidor comece a executar na porta 3001 (pode ser alterada atráves do *src/server.ts*).
Pronto, você já pode executar as requisições à API para testar o código.


## Utilização
Caso esteja utilizando o [Postman], pode acessar [este link] para baixar uma collection contendo as rotas possíveis para uso da api.

### <u>Criar um usuário</u>

**Tipo de requisição**: POST

**URL**: http://localhost:3001/users

**Parâmetros**: -

**Corpo**: 
```json
{
  "name": "example",
  "email": "example@email.com"
}
```

**Retorno**: 
```json
{
    "ok": true,
    "response": [
        {
            "id": 7810,
            "name": "test_1610021550622",
            "email": "email_1610021550622@teste.com",
            "created_at": "2021-02-28T16:25:35.380Z",
            "updated_at": "2021-02-28T16:25:35.380Z"
        }
    ]
}
```

### <u>Listar usuários</u>

**Tipo de requisição**: GET

**URL**: http://localhost:3001/users

**Parâmetros**:
```json
"page": paginação na listagem
"limit": máximo de itens retornados
```

**Corpo**: -

**Retorno**: 
```json
{
    "ok": true,
    "response": [
        {
            "id": 71,
            "name": "test_1610021550622",
            "email": "email_1610021550622@teste.com",
            "created_at": "2021-02-12T04:05:35.258Z",
            "updated_at": "2021-02-12T04:05:35.258Z"
        },
        {
            "id": 72,
            "name": "test_1610021550622",
            "email": "email_1610021550622@teste.com",
            "created_at": "2021-02-12T04:05:35.382Z",
            "updated_at": "2021-02-12T04:05:35.382Z"
        },
  ]
}
```

### <u>Mostrar um usuário específico</u>

**Tipo de requisição**: GET

**URL**: http://localhost:3001/users/{user_id}

**Parâmetros**: -

**Corpo**: -

**Retorno**: 
```json
{
    "ok": true,
    "response": {
        "id": 71,
        "name": "test_1610021550622",
        "email": "email_1610021550622@teste.com",
        "created_at": "2021-02-12T04:05:35.258Z",
        "updated_at": "2021-02-12T04:05:35.258Z"
    }
}
```

### <u>Atualizar um usuário</u>

**Tipo de requisição**: PUT

**URL**: http://localhost:3001/users/{user_id}

**Parâmetros**: -

**Corpo**: 
```json
{
  "name": "example",
  "email": "example@email.com"
}
```

**Retorno**: 
```json
{
    "ok": true,
    "response": {
        "id": 71,
        "name": "teste__1610021550622",
        "email": "teste_1610021550622@teste.com"
    }
}
```

### <u>Deletar um usuário</u>

**Tipo de requisição**: DELETE

**URL**: http://localhost:3001/users/{user_id}

**Parâmetros**: -

**Corpo**: -

**Retorno**: 
```json
{
    "ok": true,
    "response": 1
}
```

## Contato
welingtonfidelis@gmail.com
<br>
Sugestões e pull requests são sempre bem vindos 🤓 

License
----

MIT

**Free Software, Hell Yeah!**

[Expo]: <https://expo.io/>
[Node.js]: <https://nodejs.org/en/>
[knex.js]: <http://knexjs.org/>
[Sequelize]: <https://sequelize.org/>
[TypeORM]: <https://typeorm.io/#/>
[pg]: <https://node-postgres.com/>
[PostgreSQL]: <https://www.postgresql.org/>
[TypeScript]: <https://www.typescriptlang.org/>
[Postman]: <https://www.postman.com/downloads/>
[Insomnia]: <https://insomnia.rest/download/core/?&ref=>
[este link]: <https://www.getpostman.com/collections/11414e6c6d3319dfad41>