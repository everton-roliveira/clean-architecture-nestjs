import { AllExceptionFilter } from '@infra/common/filter/exception.filter';
import { LoggerService } from '@infra/logger/logger.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Filter
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));
  await app.listen(3000);
}
bootstrap();
