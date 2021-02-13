import db from '../database';

const methods = {
  async index(skip: number, limit: number) {
    const dbClient = await db.poolConnect();
    
    const query = {
      text: `SELECT * FROM users LIMIT ${limit} OFFSET ${skip};`,
      values: []
    }
    const users = (await dbClient.query(query)).rows;

    dbClient.release();

    return users;
  },

  async show(id: number) {
    const dbClient = await db.poolConnect();
    
    const query = {
      text: 'SELECT * FROM users WHERE id = $1;',
      values: [id]
    }
    const user = (await dbClient.query(query)).rows;

    dbClient.release();

    return user;
  },

  async store(name: string, email: string) {
    const dbClient = await db.poolConnect();
    
    const now = new Date();
    const query = {
      text: 'INSERT INTO users (name, email, created_at, updated_at) values ($1, $2, $3, $4);',
      values: [name, email, now, now]
    }
    await dbClient.query(query);

    dbClient.release();

    return {};
  },

  async update(id: number, name: string, email: string) {
    const dbClient = await db.poolConnect();
    
    const query = {
      text: 'UPDATE users SET name = $2, email = $3, updated_at = $4 WHERE id = $1;',
      values: [id, name, email, new Date()]
    }
    await dbClient.query(query);

    dbClient.release();

    return {};
  },

  async delete(id: number) {
    const dbClient = await db.poolConnect();
    
    const query = {
      text: 'DELETE FROM users WHERE id = $1;',
      values: [id]
    }
    await dbClient.query(query);

    dbClient.release();

    return {};
  },
}

export default methods;