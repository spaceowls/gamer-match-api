import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../database/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UsersReturnDto } from 'src/dtos/users.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UsersReturnDto[]> {
    return this.userRepository.find();
  }

  async create(user: CreateUserDto) {
    const createUser = this.userRepository.create(user);

    await this.userRepository.save(createUser);

    return {
      message: 'User has been created with success',
    };
  }
}
