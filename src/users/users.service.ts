import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find()
    return users;
  }

  async findOne(id: string): Promise<User> {
    
    const user = await this.userModel.findById(id)
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true});
    return updatedUser;
  }

  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id)
    return deletedUser;
  }
}
