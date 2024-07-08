import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/user.repository';
import { mockedUser } from '../../test/mocks/mockUser';

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: {
            getUsers: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    usersRepository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should call and return getUsers from repository', async () => {
    const mockedUsers = [mockedUser(), mockedUser()];

    jest
      .spyOn(usersRepository, 'getUsers')
      .mockReturnValue(Promise.resolve(mockedUsers));

    expect(await service.findAll()).toBe(mockedUsers);
    expect(usersRepository.getUsers).toHaveBeenCalledTimes(1);
  });
});
