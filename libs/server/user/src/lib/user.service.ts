import { CreateUserDto, UpdateUserDto, User } from '@dnd-cards/server/db';
import { IUserModel } from '@dnd-cards/shared/interfaces';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<IUserModel>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<IUserModel> {
    return this.userRepository.save(createUserDto);
  }

  async getUserByUsername(username: string): Promise<IUserModel> {
    return (await this.userRepository.find({ where: { username } }))[0];
  }

  async getUserById(id: number): Promise<IUserModel> {
    return (await this.userRepository.find({ where: { id } }))[0];
  }

  async updateUser(id: number, userData: Partial<UpdateUserDto>) {
    await this.userRepository.update({ id }, userData);
  }

  async deleteUser(id: number) {
    await this.userRepository.delete({ id });
  }
}
