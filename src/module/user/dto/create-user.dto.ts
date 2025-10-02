import { Type } from 'class-transformer';
import { 
  IsString, IsNotEmpty, IsEmail, IsOptional, IsEnum, Matches, MinLength, Validate, 
  Min
} from 'class-validator';
import { IsInt } from 'class-validator';
import { IsAdult } from 'src/common/validators/is-adult.validator';
import { IsValidDate } from 'src/common/validators/is-valid-date.validator';

export class CreateUserDto {
  @IsString({ message: 'Full name must be a string' })
  @MinLength(2, { message: 'Full name must be at least 2 characters' })
  fullname: string;

  @IsString({ message: 'Phone must be a string' })
  @Matches(/^[0-9]{8,15}$/, { message: 'Phone must be 8-15 digits' })
  phone: string;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsOptional()
  @Type(() => Date) // Chuyển string input thành Date tự động
  @Validate(IsValidDate, { message: 'Date must be after 1900' })
  @Validate(IsAdult, { message: 'You must be at least 13 years old' })
  date?: Date;

  @IsString({ message: 'Area must be a string' })
  @MinLength(2, { message: 'Area is required' })
  addressArea: string;

  @IsString({ message: 'City must be a string' })
  @MinLength(2, { message: 'City is required' })
  addressCity: string;

  @IsString({ message: 'Country must be a string' })
  @MinLength(2, { message: 'Country is required' })
  addressCountry: string;

  @IsString({ message: 'Post code must be a string' })
  @Matches(/^[0-9]{4,6}$/, { message: 'Post code must be 4-6 digits' })
  postCode: string;

  @IsInt()
  @Min(1)
  roleId: number;

  @IsInt()
  @Min(1)
  accountTypeId: number;

  @IsOptional()
  @IsEnum(['active', 'inactive'], { message: 'Status must be either active or inactive' })
  status?: 'active' | 'inactive';
}
