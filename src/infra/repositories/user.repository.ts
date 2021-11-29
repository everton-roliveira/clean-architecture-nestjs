import { IUserRepository } from '@domain/repositories/user-repository.interface';
import { UserEntity } from '@infra/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel, UserProps } from 'src/domain/model/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async insert(user: UserModel): Promise<UserModel> {
    const entity = this.toEntity(user);
    const insert = await this.repository.save(entity);
    return this.toModel(insert);
  }
  private toEntity(user: UserModel): UserEntity {
    const entity: UserEntity = new UserEntity();

    entity.id = user.getId();
    entity.name = user.getName();
    entity.lastName = user.getLastName();
    entity.email = user.getEmail();
    entity.password = user.getPassword();
    entity.active = user.isActive();
    entity.createdAt = user.getCreatedAt();
    entity.updatedAt = user.getUpdatedAt();

    return entity;
  }

  private toModel(entity: UserEntity): UserModel {
    const props: UserProps = entity;
    const user: UserModel = new UserModel(props);

    return user;
  }
}
