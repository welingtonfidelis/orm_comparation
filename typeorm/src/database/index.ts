import { createConnection } from 'typeorm';

createConnection({
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'ormcomparation',
  type: "postgres",
  synchronize: false,
  logging: true,
  entities: [
    "src/models/*.ts"
  ]
}).then(() => {
  console.log('💾 Database connected');
});