import { Table, Column, Model, DataType } from 'sequelize-typescript';

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
  declare fullname: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare phone: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;

  @Column({ type: DataType.DATE, allowNull: true })
  declare date: Date;

  @Column({ type: DataType.STRING, allowNull: false })
  declare addressArea: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare addressCity: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare addressCountry: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare postCode: string;

   @Column({
    type: DataType.ENUM('administrator', 'viewer', 'moderator'),
    allowNull: false,
  })
  declare role: string;


  @Column({
    type: DataType.ENUM('pro', 'basic'),
    allowNull: false,
  })
  declare accountType: string;

  @Column({
    type: DataType.ENUM('active', 'inactive'),
    allowNull: false,
  })
  declare status: string;
}
