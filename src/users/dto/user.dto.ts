import { User as PrismaUser } from '@prisma/client';
import { IsDate, IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class User implements PrismaUser {
  @IsString()
  id: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
