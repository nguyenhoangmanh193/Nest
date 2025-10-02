import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    
    @Get()
    async getAllUsers(): Promise<UserResponseDto[]> {
        const users = await this.userService.getAllUsers();
        return users;
    }

    @Post()
    async addUser(@Body() dto: CreateUserDto): Promise<UserResponseDto>{
        console.log('Received data:', dto);
        return this.userService.addUser(dto);
    }

    @Patch(':id/edit')
    async editUser(
        @Param('id') id: string,
        @Body() dto: UpdateUserDto
    ): Promise<UserResponseDto>
    {
         return this.userService.editUser(id,dto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): 
      Promise<{ success: boolean; message: string }>{
        return this.userService.deleteUser(id);
    }

    @Delete(':id/delete')
    async deleteHard(@Param('id') id: string) {
        return this.userService.deleteHard(id);
    }    

    @Patch(':id/restore')
    async restoreUser(@Param('id') id: string) {
       return this.userService.restore(id);
    }


   
    


   
    

    
}
