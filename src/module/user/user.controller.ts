import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userSerivce: UserService){}
    
    @Get()
    async getAllUsers(): Promise<UserResponseDto[]> {
        const users = await this.userSerivce.getAllUsers();
        return users;
    }

    @Post()
    async addUser(@Body() dto: CreateUserDto): Promise<UserResponseDto>{
        console.log('Received data:', dto);
        return this.userSerivce.addUser(dto);
    }

    @Patch(':id/edit')
    async editUser(
        @Param('id',ParseIntPipe) id: number,
        @Body() dto: UpdateUserDto
    ): Promise<UserResponseDto>
    {
         return this.userSerivce.editUser(id,dto);
    }

    @Delete(':id')
    async deleteUser(@Param('id',ParseIntPipe) id: number): Promise<void>{
        return this.userSerivce.deleteUser(id);
    }

    
}
