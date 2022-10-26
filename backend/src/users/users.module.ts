import { AuthModule } from './../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [MongooseModule.forFeature([]), forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
