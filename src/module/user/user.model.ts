import { Table, Column, Model, DataType } from 'sequelize-typescript';

export enum UserRole {
  ADMIN = 'administrator',
  VIEWER = 'viewer',
  MODERATOR = 'moderator',
}

export enum AccountType {
  PRO = 'pro',
  BASIC = 'basic',
}

export enum UserActive {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  fullname: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.DATE, allowNull: true })
  date: Date;

  @Column({ type: DataType.STRING, allowNull: false })
  addressArea: string;

  @Column({ type: DataType.STRING, allowNull: false })
  addressCity: string;

  @Column({ type: DataType.STRING, allowNull: false })
  addressCountry: string;

  @Column({ type: DataType.STRING, allowNull: false })
  postCode: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)), // <- dùng enum
    allowNull: false,
  })
  role: UserRole;

  @Column({
    type: DataType.ENUM(...Object.values(AccountType)),
    allowNull: false,
  })
  accountType: AccountType;

  @Column({
    type: DataType.ENUM(...Object.values(UserActive)),
    defaultValue: UserActive.ACTIVE,
  })
  status: UserActive;
}
