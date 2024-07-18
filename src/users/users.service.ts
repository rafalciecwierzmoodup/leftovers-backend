import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/user.repository';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  create(): string {
    return 'This action adds a new user';
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.getUsers();
  }

  findOne(id: string): string {
    return `This action returns a #${id} user`;
  }

  update(id: string): string {
    return `This action updates a #${id} user`;
  }

  remove(id: string): string {
    return `This action removes a #${id} user`;
  }
}
