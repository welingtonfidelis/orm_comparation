import { Sequelize } from 'sequelize'

const db = 'ormcomparation';
const username = 'root';
const password = 'root';

export const sequelize = new Sequelize(db, username, password, {
  dialect: "postgres",
  port: 5432,
  logging: true
});

sequelize.authenticate()