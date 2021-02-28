import { getRepository } from 'typeorm';
import User from '../models/User';

const methods = {
  async index(skip: number, take: number) {
    const respository = getRepository(User);
    
    const users = await respository.find({ skip, take });

    return users;
  },

  async show(id: number) {
    const respository = getRepository(User);

    const user = await respository.findOne({ id });
    
    return user;
  },

  async store(name: string, email: string) {
    const repository = getRepository(User);

    const user = repository.create({ name, email });
    await repository.save(user);

    return user;
  },

  async update(id: number, name: string, email: string) {
    const repository = getRepository(User);

    const user = new User(id, name, email);
    await repository.update(id, user);

    return user;
  },

  async delete(id: number) {
    const repository = getRepository(User);

    const user = await repository.delete({ id });
    return user;
  },
}

export default methods;