import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'account_types',
  timestamps: false,
})
export class AccountType extends Model<AccountType> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare name: string;
}
