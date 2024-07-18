import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/user.repository';

@Module({
  controllers: [UsersController],
  exports: [UsersService],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
