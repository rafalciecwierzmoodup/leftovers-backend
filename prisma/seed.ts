import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const person1 = await prisma.user.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: faker.internet.email(),
      password: faker.internet.password({
        length: 8,
      }),
    },
  });

  const person2 = await prisma.user.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: faker.internet.email(),
      password: faker.internet.password({
        length: 8,
      }),
    },
  });

  console.log(person1);
  console.log(person2);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
