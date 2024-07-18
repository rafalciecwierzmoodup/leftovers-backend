import { faker } from '@faker-js/faker';
import { User } from '@prisma/client';

export function mockedUser(): User {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  };
}
