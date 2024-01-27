import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {
  CreateUserDto,
  CreateUserReturnDto,
  UsersReturnDto,
} from 'src/dtos/users.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Return list of users on the platform',
    type: UsersReturnDto,
    isArray: true,
  })
  async findAll(): Promise<UsersReturnDto[]> {
    return this.userService.findAll();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Message of success',
    type: CreateUserReturnDto,
  })
  async create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
}
