import { IUseCase } from '@domain/base/use-case.interface';
import { ILogger } from '@domain/logger/logger.interface';
import { UserModel } from '@domain/model/user.model';
import { IUserRepository } from '@domain/repositories/user-repository.interface';

export class AddUserUseCase implements IUseCase<UserModel> {
  constructor(
    private readonly logger: ILogger,
    private readonly repository: IUserRepository,
  ) {}

  async execute(user: UserModel): Promise<UserModel> {
    const result = await this.repository.insert(user);
    this.logger.log(AddUserUseCase.name, 'new user entered');
    return result;
  }
}
