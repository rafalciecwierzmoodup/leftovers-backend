import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/user.repository';

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
    const mockedDate = new Date();
    const mockUsers = [
      {
        id: '5e407bf7-e682-410f-b364-cfdf2bb516e9',
        email: 'Jesus_Lebsack51@gmail.com',
        password: 'ImSLyqr8',
        createdAt: mockedDate,
        updatedAt: mockedDate,
      },
      {
        id: '08da3955-cb4b-42b8-8817-130674684b98',
        email: 'Raul.Glover5@gmail.com',
        password: 'Lu6qhKt8',
        createdAt: mockedDate,
        updatedAt: mockedDate,
      },
    ];
    jest
      .spyOn(usersRepository, 'getUsers')
      .mockReturnValue(Promise.resolve(mockUsers));

    expect(await service.findAll()).toBe(mockUsers);
    expect(usersRepository.getUsers).toHaveBeenCalledTimes(1);
  });
});
