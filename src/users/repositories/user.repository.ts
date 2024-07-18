import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class UsersRepository {
  constructor(private database: DatabaseService) {}

  async getUsers(): Promise<User[]> {
    return this.database.user.findMany();
  }
}
