import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user.dto';
import { UserRepository } from './user.repository';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleRepository } from './common/repository/role.repository';
import { AccountTypeRepository } from './common/repository/account-type.repository';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly roleRepository: RoleRepository,
        private readonly accountTypeRepository: AccountTypeRepository,
    ){ }

    async addUser(dto: CreateUserDto): Promise<UserResponseDto>{
         
        const exist = await this.userRepository.findByEmail(dto.email);
        if(exist) throw new NotFoundException('Email already exists')

        const role = await this.roleRepository.findById(dto.roleId);
        if (!role) throw new BadRequestException(`roleId ${dto.roleId} does not exist`);

        const accountType = await this.accountTypeRepository.findById(dto.accountTypeId);
        if (!accountType) throw new BadRequestException(`accountTypeId ${dto.accountTypeId} does not exist`);
      
        const user = await this.userRepository.create(dto);
        
        return UserResponseDto.fromEntity(user);

    }
    
  

    async editUser(id: string, dto: UpdateUserDto): Promise<UserResponseDto> {
        const user = await this.userRepository.findById(id);
        if (!user) throw new NotFoundException('User not found');

        if (dto.email && dto.email !== user.email) {
            const exist = await this.userRepository.findByEmail(dto.email);
            if (exist) throw new BadRequestException('Email already exists');
        }

        if (dto.roleId) {
            const role = await this.roleRepository.findById(dto.roleId);
            if (!role) throw new BadRequestException(`roleId ${dto.roleId} does not exist`);
        }

        if (dto.accountTypeId) {
           const accountType = await this.accountTypeRepository.findById(dto.accountTypeId);
           if (!accountType) throw new BadRequestException(`accountTypeId ${dto.accountTypeId} does not exist`);
        }

        const updated = await this.userRepository.update(id, dto);
        if (!updated) throw new NotFoundException('User not found after update'); 

        return UserResponseDto.fromEntity(updated);
    }


    async deleteUser(id: string): Promise<{ success: boolean; message: string }> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            return { success: false, message: 'User not found' };
        }
        await user.destroy();
        return { success: true, message: 'User soft deleted successfully' };
    }

    async deleteHard(id: string): Promise<{ success: boolean; message: string }> {
       const user = await this.userRepository.findByIdWithDeleted(id);
       if (!user) {
          return { success: false, message: 'User not found' };
        }
        await user.destroy({ force: true });
        return { success: true, message: 'User permanently deleted' };
    }

    async restore(id: string): Promise<{ success: boolean; message: string }> {
        const user = await this.userRepository.findByIdWithDeleted(id);
        if (!user) {
          return { success: false, message: 'User not found' };
        }
        if (!user.deletedAt) {
         return { success: false, message: 'User is not deleted' };
        } 
        await user.restore();
        return { success: true, message: 'User restored successfully' };
    }


    async getAllUsers(): Promise<UserResponseDto[]> {
        const users = await this.userRepository.findAll();
        return UserResponseDto.fromEntityList(users);
    }



    
}
