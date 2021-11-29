import { DynamicModule, Module } from '@nestjs/common';
import { AddUserUseCase } from '@usecase/user/add-user.usecase';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { RepositoriesModule } from '../repositories/repositories.module';
import { UserRepository } from '../repositories/user.repository';
import { UseCaseProxy } from './usecases-proxy';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class UsecasesProxyModule {
  static ADD_USER_USECASE_PROXY = 'AddUserUseCaseProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [LoggerService, UserRepository],
          provide: UsecasesProxyModule.ADD_USER_USECASE_PROXY,
          useFactory: (logger: LoggerService, userRepository: UserRepository) =>
            new UseCaseProxy(new AddUserUseCase(logger, userRepository)),
        },
      ],
      exports: [UsecasesProxyModule.ADD_USER_USECASE_PROXY],
    };
  }
}
