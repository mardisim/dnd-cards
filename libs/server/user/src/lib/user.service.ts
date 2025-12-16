import { CreateUserDto, UpdateUserDto, User } from '@dnd-cards/server-db';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  async getUserByUsername(username: string): Promise<User> {
    return (await this.userRepository.find({ where: { username } }))[0];
  }

  async getUserById(id: string): Promise<User> {
    return (await this.userRepository.find({ where: { id } }))[0];
  }

  async updateUser(id: string, userData: Partial<UpdateUserDto>) {
    await this.userRepository.update({ id }, userData);
  }

  async deleteUser(id: string) {
    await this.userRepository.delete({ id });
  }
}
