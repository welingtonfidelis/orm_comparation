import * as Sequelize from 'sequelize'
import { sequelize } from '../database';

// export interface UserAddModel {
//   id: number
//   email: string
//   name: string
// }

// export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
//   id: number
//   email: string
//   name: string
// }

// export interface UserViewModel {
//   id: number
//   email: string
// }

export const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: Sequelize.STRING,
  name: Sequelize.STRING
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})