import { ExceptionsModule } from '@infra/exceptions/exceptions.module';
import { LoggerModule } from '@infra/logger/logger.module';
import { UsecasesProxyModule } from '@infra/usecases-proxy/usecases-proxy.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [LoggerModule, ExceptionsModule, UsecasesProxyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
