import { CreateUserDto, UpdateUserDto, Users } from '@dnd-cards/server-db';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    return this.userRepository.save(createUserDto);
  }

  async getUserByUsername(username: string): Promise<Users> {
    return (await this.userRepository.find({ where: { username } }))[0];
  }

  async getUserById(id: string): Promise<Users> {
    return (await this.userRepository.find({ where: { id } }))[0];
  }

  async updateUser(id: string, userData: Partial<UpdateUserDto>) {
    await this.userRepository.update({ id }, userData);
  }

  async deleteUser(id: string) {
    await this.userRepository.delete({ id });
  }
}
