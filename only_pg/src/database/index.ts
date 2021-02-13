import { Pool, Client } from 'pg';

let globalConnection: Pool;

const connOptions = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 5432,
  database: 'ormcomparation'
}

const methods = {
  async poolConnect() {
    if (globalConnection) return globalConnection.connect();

    const pool = new Pool(connOptions);

    globalConnection = pool;

    return pool.connect();
  },

  async clientCoonect() {
    const client = new Client(connOptions);
    await client.connect();  

    return client;
  }
}


export default methods;