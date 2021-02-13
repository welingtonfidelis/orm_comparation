import * as fs from 'fs';
import { performance } from 'perf_hooks';

import userRepository from '../repositories/userRepository';

const methods = {
  async index(page: number, limit: number) {
    let results = fs.readFileSync('results.txt', 'utf8');
    const start = performance.now();

    const skip = limit * (page - 1);
    const users = await userRepository.index(skip, limit);

    const end = performance.now();

    results += `\n index: ${(end - start).toFixed(3)}`;
    fs.writeFileSync('results.txt', results, { encoding: 'utf8' });

    return users;
  },

  async show(id: number) {
    let results = fs.readFileSync('results.txt', 'utf8');
    const start = performance.now();

    const user = await userRepository.show(id);

    const end = performance.now();

    results += `\n show: ${(end - start).toFixed(3)}`;
    fs.writeFileSync('results.txt', results, { encoding: 'utf8' });

    return user;
  },

  async store(name: string, email: string) {
    let results = fs.readFileSync('results.txt', 'utf8');
    const start = performance.now();

    const user = await userRepository.store(name, email);

    const end = performance.now();

    results += `\n store: ${(end - start).toFixed(3)}`;
    fs.writeFileSync('results.txt', results, { encoding: 'utf8' });

    return user;
  },

  async update(id: number, name: string, email: string) {
    let results = fs.readFileSync('results.txt', 'utf8');
    const start = performance.now();

    const user = await userRepository.update(id, name, email);

    const end = performance.now();

    results += `\n update: ${(end - start).toFixed(3)}`;
    fs.writeFileSync('results.txt', results, { encoding: 'utf8' });

    return user;
  },

  async delete(id: number) {
    let results = fs.readFileSync('results.txt', 'utf8');
    const start = performance.now();

    const user = await userRepository.delete(id);

    const end = performance.now();

    results += `\n delete: ${(end - start).toFixed(3)}`;
    fs.writeFileSync('results.txt', results, { encoding: 'utf8' });

    return user;
  },
}

export default methods;