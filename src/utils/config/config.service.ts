import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class ConfigService {
  public getTypeormConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      ssl: false,
      port: 5432,
      entities: ['dist/**/*.entity.js'],
      migrations: ['src/modules/database/migratiopns/*.ts'],
      migrationsTableName: 'migration',
      synchronize: true,
    };
  }
}

export const configService = new ConfigService();
