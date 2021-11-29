import { IUseCase } from '@domain/base/use-case.interface';
import { ILogger } from '@domain/logger/logger.interface';
import { UserModel, UserProps } from '@domain/model/user.model';
import { IUserRepository } from '@domain/repositories/user-repository.interface';

export class AddUserUseCase implements IUseCase<UserModel> {
  constructor(
    private readonly logger: ILogger,
    private readonly repository: IUserRepository,
  ) {}

  async execute(props: UserProps): Promise<UserModel> {
    const userProps: UserProps = {
      name: props.name,
      lastName: props.lastName,
      email: props.email,
      password: props.password,
      active: null,
    };
    const user: UserModel = UserModel.create(userProps);
    const result = await this.repository.insert(user);
    this.logger.log(AddUserUseCase.name, 'new user entered');
    return result;
  }
}
