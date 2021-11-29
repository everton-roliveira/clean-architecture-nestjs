import { IsEmail, IsNotEmpty } from 'class-validator';

export class AddUserRequest {
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  lastName!: string;
  @IsNotEmpty()
  @IsEmail()
  email!: string;
  @IsNotEmpty()
  password!: string;
}
