import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  
  async create(dto: CreateUserDto) : Promise<User>{
      const user = new User();
      Object.assign(user,dto);
      return user.save();
  }

  async update(id: number, dto: UpdateUserDto): Promise<User>{
    const user = await this.userModel.findByPk(id);
    if (!user) throw new Error('user not found')
    Object.assign(user,dto);
    return user.save();    
  }

  async delete(id:number) : Promise<void>{
     const user = await this.userModel.findByPk(id);
     if(user) await user.destroy();
  }

  async findById(id: number): Promise<User | null> {
     return this.userModel.findByPk(id);
  }

  async findByEmail(email: string): Promise<User | null> {
     return this.userModel.findOne({ where: { email } });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }



}