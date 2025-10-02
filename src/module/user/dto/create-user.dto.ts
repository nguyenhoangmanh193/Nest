import { IsString, IsNotEmpty, IsEmail, IsOptional, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString() @IsNotEmpty() fullname: string;
  @IsString() @IsNotEmpty() phone: string;
  @IsEmail() @IsNotEmpty() email: string;
  @IsOptional() date?: Date;
  @IsString() @IsNotEmpty() addressArea: string;
  @IsString() @IsNotEmpty() addressCity: string;
  @IsString() @IsNotEmpty() addressCountry: string;
  @IsString() @IsNotEmpty() postCode: string;

  @IsString() @IsIn(['administrator', 'viewer', 'moderator'])
  role: string;

  @IsString() @IsIn(['pro', 'basic'])
  accountType: string;

  @IsOptional() @IsString() @IsIn(['active', 'inactive'])
  status?: string;
}
