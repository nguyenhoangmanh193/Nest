import { Table, Column, Model, DataType } from 'sequelize-typescript';

export type UserRole = 'administrator' | 'viewer' | 'moderator';
export type AccountType = 'pro' | 'basic';
export type UserActive = 'active' | 'inactive';

@Table({
  tableName: 'users',
  timestamps: true, // createdAt, updatedAt tự động
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  date: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  addressArea: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  addressCity: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  addressCountry: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  postCode: string;

  @Column({
    type: DataType.ENUM('administrator', 'viewer', 'moderator'),
    allowNull: false,
  })
  role: UserRole;

  @Column({
    type: DataType.ENUM('pro', 'basic'),
    allowNull: false,
  })
  accountType: AccountType;

  @Column({
    type: DataType.ENUM('active', 'inactive'),
    defaultValue: 'active',
  })
  status: UserActive;

  
}
