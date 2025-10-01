import { IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { AccountType, UserActive, UserRole } from "../user.model";

export class CreateUserDto{

    @IsString()
    fullname: string;
    
    @IsString()
    phone: string;

    @IsString()
    email: string;

    @IsOptional()
    @IsDateString()
    date?: string;

    @IsString()
    addressArea: string;

    @IsString()
    addressCity: string;

    @IsString()
    addressCountry: string;

    @IsEnum(UserRole)
    role: UserRole;

    @IsEnum(AccountType)
    accountType: AccountType;

    @IsEnum(UserActive)
    status: UserActive;

}