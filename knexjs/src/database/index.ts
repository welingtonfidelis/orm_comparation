import knex from 'knex';

const connection = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: "ormcomparation"
  },
  debug: true
});

export default connection;