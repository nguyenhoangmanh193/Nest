// src/roles/role.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../role.model';


@Injectable()
export class RoleRepository {
  constructor(@InjectModel(Role) private readonly roleModel: typeof Role) {}

  async findById(id: number): Promise<Role | null> {
    return this.roleModel.findByPk(id);
  }

  async findAll(): Promise<Role[]> {
    return this.roleModel.findAll();
  }
}
