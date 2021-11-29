import { LoggerModule } from '@infra/logger/logger.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
