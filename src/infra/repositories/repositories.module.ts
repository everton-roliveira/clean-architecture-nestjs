import { TypeOrmConfigModule } from '@infra/config/typeorm/typeorm.module';
import { UserEntity } from '@infra/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class RepositoriesModule {}
