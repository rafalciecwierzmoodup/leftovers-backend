import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './dto/user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(): string {
    return this.usersService.create();
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string): string {
    return this.usersService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.usersService.remove(id);
  }
}
