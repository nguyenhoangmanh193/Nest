import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user.dto';
import { UserRepository } from './user.repository';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository){}

    async addUser(dto: CreateUserDto): Promise<UserResponseDto>{
         
        const exist = await this.userRepository.findByEmail(dto.email);
        if(exist) throw new BadRequestException('Email already exists')

        const user = await this.userRepository.create(dto);
        return new UserResponseDto(user);

    }

    async editUser(id: number, dto: UpdateUserDto): Promise<UserResponseDto>{
        const user = await this.userRepository.findById(id);
        if (!user) throw new NotFoundException('User not found');
        
        const updated = await this.userRepository.update(id,dto);

        return new UserResponseDto(updated);

    }

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    async getAllUsers(): Promise<UserResponseDto[]> {
        const users = await this.userRepository.findAll();
        return users.map(user => new UserResponseDto(user));
    }



    
}
