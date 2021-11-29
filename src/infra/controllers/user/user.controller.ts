import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AddUserRequest } from '@infra/controllers/user/request/add-user.request';
import { UserResponse } from '@infra/controllers/user/response/user.response';
import { UserModel, UserProps } from '@domain/model/user.model';
import { UsecasesProxyModule } from '@infra/usecases-proxy/usecases-proxy.module';
import { UseCaseProxy } from '@infra/usecases-proxy/usecases-proxy';
import { AddUserUseCase } from '@usecase/user/add-user.usecase';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UsecasesProxyModule.ADD_USER_USECASE_PROXY)
    private readonly addUserUseCase: UseCaseProxy<AddUserUseCase>,
  ) {}

  @Post()
  async createUser(@Body() userRequest: AddUserRequest): Promise<UserResponse> {
    const userCreateProps: UserProps = this.toProps(userRequest);
    const userCreated: UserModel = await this.addUserUseCase
      .getInstance()
      .execute(userCreateProps);

    return new UserResponse(userCreated);
  }

  private toProps(request: AddUserRequest): UserProps {
    return {
      name: request.name,
      lastName: request.lastName,
      email: request.email,
      password: request.password,
      active: null,
    };
  }
}
