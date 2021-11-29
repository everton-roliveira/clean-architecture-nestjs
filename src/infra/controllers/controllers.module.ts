import { UsecasesProxyModule } from '@infra/usecases-proxy/usecases-proxy.module';
import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [UserController],
})
export class ControllersModule {}
