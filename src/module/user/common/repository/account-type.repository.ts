// src/account-types/account-type.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AccountType } from '../account-type.model';

@Injectable()
export class AccountTypeRepository {
  constructor(@InjectModel(AccountType) private readonly accountTypeModel: typeof AccountType) {}

  async findById(id: number): Promise<AccountType | null> {
    return this.accountTypeModel.findByPk(id);
  }

  async findAll(): Promise<AccountType[]> {
    return this.accountTypeModel.findAll();
  }
}
