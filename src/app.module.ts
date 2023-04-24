import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { FeedbackModule } from './module/feedback/feedback.module';


@Module({
  imports: 
  [ ConfigModule.forRoot({isGlobal : true}), 
    DatabaseModule, UsersModule, AuthModule, FeedbackModule],
})
export class AppModule {}
