import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  create() {
    return 'This action adds a new user';
  }

  findAll() {
    return this.usersRepository.getUsers();
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
