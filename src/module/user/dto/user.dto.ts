import { User } from "../user.model";


export class UserResponseDto {
  id: string;
  fullname: string;
  phone: string;
  email: string;
  date?: Date;
  addressArea: string;
  addressCity: string;
  addressCountry: string;
  postCode: string;

  // Foreign
  roleId: number;
  accountTypeId: number;
  /////

  role: string;
  accountType: string;


  status: string;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
   
  static fromEntity(user: User): UserResponseDto {
    return new UserResponseDto({
      id: user.id,
      fullname: user.fullname,
      phone: user.phone,
      email: user.email,
      date: user.date,
      addressArea: user.addressArea,
      addressCity: user.addressCity,
      addressCountry: user.addressCountry,
      postCode: user.postCode,

      roleId: user.roleId,
      accountTypeId: user.accountTypeId,

      role: user.role ? user.role.name : undefined,
      accountType: user.accountType ? user.accountType.name : undefined,

      status: user.status

    });
  }

   static fromEntityList(users: User[]): UserResponseDto[] {
    return users.map(user => UserResponseDto.fromEntity(user));
  }


}


