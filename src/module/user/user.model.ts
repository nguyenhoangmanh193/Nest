import { Table, Column, Model, DataType, DeletedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Role } from './common/role.model';
import { AccountType } from './common/account-type.model';

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true,
})
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

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

  // role 
  @ForeignKey(() => Role) 
  @Column({
    type: DataType.INTEGER,
  })
  declare roleId: number;
  @BelongsTo(() => Role)
  declare role: Role;
  
  
  // account type
  @ForeignKey(() => AccountType)
  @Column({ type: DataType.INTEGER })
  declare accountTypeId: number;

  @BelongsTo(() => AccountType)
  declare accountType: AccountType;

  @Column({
    type: DataType.ENUM('active', 'inactive'),
    allowNull: false,
  })
  declare status: string;

  @DeletedAt
  declare deletedAt: Date | null;

}
