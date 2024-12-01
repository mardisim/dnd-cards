import { RegisterDto, User } from '@dnd-cards/server/db';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  private static async getHash(password: string): Promise<string> {
    return argon2.hash(password);
  }

  static async compareHash(password: string, hash: string): Promise<boolean> {
    try {
      return await argon2.verify(hash, password);
    } catch {
      return false;
    }
  }

  async createUser(registerDto: RegisterDto): Promise<User> {
    const password = await UserService.getHash(registerDto.password);
    const user = new User({
      ...registerDto,
      password,
    });
    return this.userRepository.save(user);
  }

  async getUserByUsername(username: string): Promise<User> {
    return (await this.userRepository.find({ where: { username } }))[0];
  }
}
