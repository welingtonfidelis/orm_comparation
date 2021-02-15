import knex from '../database';

const methods = {
  async index(skip: number, limit: number) {
    
    const users = knex('users')
      .select('*')
      .limit(limit)
      .offset(skip);

    return users;
  },

  async show(id: number) {
    
    const user = knex('users')
      .select('*')
      .where('id', '=', id);

    return user;
  },

  async store(name: string, email: string) {
    
    const now = new Date();
    const user = knex('users')
      .insert({ name, email, created_at: now, updated_at: now });

    return user;
  },

  async update(id: number, name: string, email: string) {
    
    const user = knex('users')
      .update({ name, email, updated_at: new Date() })
      .where('id', '=', id);

    return user;
  },

  async delete(id: number) {
    
    const user = knex('users')
      .delete()
      .where('id', '=', id);

    return user;
  },
}

export default methods;