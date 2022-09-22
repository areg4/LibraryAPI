import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { idValidate } from 'src/utils/functions';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    if(!idValidate(id)) throw new BadRequestException("ID bad format")
    const user = await this.usersService.findOne(id);
    if (!user){
      throw new NotFoundException('User not found!')
    }
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if(!idValidate(id)) throw new BadRequestException("ID bad format")
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(!idValidate(id)) throw new BadRequestException("ID bad format")
    return await this.usersService.remove(id);
  }
}
