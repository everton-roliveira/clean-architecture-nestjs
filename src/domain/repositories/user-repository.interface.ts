import { UserModel } from '@domain/model/user.model';

export interface IUserRepository {
  insert(user: UserModel): Promise<UserModel>;
}
