import { AccountType, UserActive, UserRole } from "../user.model";



export class UserResponseDto {
  id: number;
  fullname: string;
  phone: string;
  email: string;
  date?: Date;
  addressArea: string;
  addressCity: string;
  addressCountry: string;
  postCode: string;
  role: UserRole;
  accountType: AccountType;
  status: UserActive;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}