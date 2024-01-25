import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { configService } from './utils/config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configService.getTypeormConfig()),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
