import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUser1638217304617 implements MigrationInterface {
  private readonly tableName = 'user_tbl';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
            comment: 'name user',
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '100',
            comment: 'last name user',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
            comment: 'email user',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '60',
            comment: 'password user',
          },
          {
            name: 'active',
            type: 'tinyint',
            comment: 'indicates if the user is active',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
            comment: 'creation date',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
            comment: 'update date',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
