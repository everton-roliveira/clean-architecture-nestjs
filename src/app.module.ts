import { ExceptionsModule } from '@infra/exceptions/exceptions.module';
import { LoggerModule } from '@infra/logger/logger.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [LoggerModule, ExceptionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
