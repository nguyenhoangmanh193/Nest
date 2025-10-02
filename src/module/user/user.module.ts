import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { Role } from './common/role.model';
import { AccountType } from './common/account-type.model';
import { RoleRepository } from './common/repository/role.repository';
import { AccountTypeRepository } from './common/repository/account-type.repository';


@Module({
  imports: [SequelizeModule.forFeature([User, Role, AccountType])],
  providers: [UserService, UserRepository, RoleRepository, AccountTypeRepository],
  controllers: [UserController],
  exports: [SequelizeModule]
})
export class UserModule {}
