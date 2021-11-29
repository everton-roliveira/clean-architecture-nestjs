import { UserModel } from '@domain/model/user.model';

export class UserResponse {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  active: boolean;

  constructor(user: UserModel) {
    this.id = user.getId();
    this.name = user.getName();
    this.lastName = user.getLastName();
    this.email = user.getEmail();
    this.password = user.getPassword();
    this.active = user.isActive();
  }
}
