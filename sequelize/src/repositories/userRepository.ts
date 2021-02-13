import { User } from '../models/User';

const methods = {
  async index(skip: number, limit: number) {
    const users = await User.findAll({limit, offset: skip});

    return users;
  },

  async show(id: number) {
    const user = await User.findOne({ where: { id }});

    return user;
  },

  async store(name: string, email: string) {
    const user = await User.create({ name, email });

    return user;
  },

  async update(id: number, name: string, email: string) {
    const user = await User.update({ name, email }, { where: { id }});

    return user;
  },

  async delete(id: number) {
    const user = await User.destroy({ where: { id }});

    return user;
  },
}

export default methods;