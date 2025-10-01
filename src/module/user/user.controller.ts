import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userSerivce: UserService){}
    // Lấy danh sách tất cả user
    @Get()
    async getAllUsers(): Promise<UserResponseDto[]> {
        const users = await this.userSerivce.getAllUsers();
        return users;
    }

    @Post()
    async addUser(@Body() dto: CreateUserDto): Promise<UserResponseDto>{
        return this.userSerivce.addUser(dto);
    }

    
}
