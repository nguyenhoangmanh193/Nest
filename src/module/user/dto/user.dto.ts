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
  role: string;
  accountType: string;
  status: string;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
