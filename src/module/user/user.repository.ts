import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from './common/role.model';
import { AccountType } from './common/account-type.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User) private userModel: typeof User,
) {}
  
   
  async create(dto: CreateUserDto): Promise<User> {
      const user = this.userModel.build();

      Object.assign(user, dto);
      return user.save();
    
   }


  async update(id: string, dto: UpdateUserDto): Promise<User | null> {
    const user = await this.userModel.findByPk(id);
    if (!user) return null;
    Object.assign(user, dto);
    return user.save();
  }

  async delete(id: string): Promise<boolean> {
    const user = await this.userModel.findByPk(id);
    if (!user) return false;
    await user.destroy();
    return true;
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findByPk(id, {
      include: [Role, AccountType]
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email },
    include: [Role, AccountType] });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({
      include: [Role,AccountType]
    });
  }

  async findAllWithDeleted(): Promise<User[]> {
    return this.userModel.findAll({ paranoid: false ,
      include: [Role, AccountType]
    });
  }

  async findByIdWithDeleted(id: string): Promise<User | null> {
    return this.userModel.findByPk(id, { paranoid: false,
      include: [Role, AccountType]
     });
  }

  async restore(id: string): Promise<boolean> {
    const user = await this.userModel.findByPk(id, { paranoid: false });
    if (!user) return false;
    await user.restore();
    return true;
  }
}
