import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({summary: 'Creates a new user'})
  @ApiResponse({ 
      status: 201, 
      description: 'Creates a user.'
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all users' })
  @ApiResponse({
      status: 200,
      description: 'Returns a list of users',
      type: User,
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a user by id' })
  @ApiResponse({
      status: 200,
      description: 'Returns a user with the specified id',
      type: User,
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates a user by id' })
  @ApiResponse({
      status: 200,
      description: 'Updates a user',
      type: User,
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes a user' })
  @ApiResponse({
      status: 200,
      description: 'Deletes the user with the specified id',
      type: User,
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
