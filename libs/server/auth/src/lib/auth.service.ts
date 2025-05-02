import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@dnd-cards/server-user';
import { ICreateUser, IJWTPayloadUser } from '@interfaces';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';
import { CreateUserDto, LoginUserDto } from '@dnd-cards/server-db';

@Injectable()
export class AuthService {
  expiresIn = 3600;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}
  async getTokens(id: number, username: string) {
    const { firstName, lastName } = await this.userService.getUserById(id);
    const payload = { username, firstName, lastName };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('AUTH_JWT_SECRET'),
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('AUTH_JWT_REFRESH_SECRET'),
        expiresIn: '7d',
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async validateUser(signedUser: IJWTPayloadUser): Promise<boolean> {
    if (signedUser && signedUser.username) {
      return Boolean(this.userService.getUserByUsername(signedUser.username));
    }
    return false;
  }

  private async getHash(password: string): Promise<string> {
    return argon2.hash(password);
  }

  public async compareHash(password: string, hash: string): Promise<boolean> {
    try {
      return await argon2.verify(hash, password);
    } catch {
      return false;
    }
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await this.getHash(refreshToken);
    this.userService.updateUser(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async registerUser(createUserDto: CreateUserDto): Promise<ICreateUser> {
    if (!(createUserDto && createUserDto.username && createUserDto.password)) {
      throw new ForbiddenException('Username and password are required!');
    }

    const userExists = await this.userService.getUserByUsername(createUserDto.username);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await this.getHash(createUserDto.password);
    const newUser = await this.userService.createUser({
      ...createUserDto,
      password: hashedPassword,
    });
    const tokens = await this.getTokens(newUser.id, newUser.username);
    await this.updateRefreshToken(newUser.id, tokens.refreshToken);
    return { ...newUser, ...tokens };
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<Partial<ICreateUser>> {
    const user = await this.userService.getUserByUsername(loginUserDto.username);
    if (!user) {
      throw new BadRequestException('User does not exist');
    }
    const passwordMatches = await argon2.verify(user.password, loginUserDto.password);
    if (!passwordMatches) {
      throw new BadRequestException('Password is incorrect');
    }
    const tokens = await this.getTokens(user.id, loginUserDto.username);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    const { password, ...outObject } = { ...user, ...tokens };
    return outObject;
  }

  async refreshTokens(refreshToken: string) {
    let refreshTokenMatches = false;
    const tokenPayload = await this.jwtService.verify(refreshToken, {
      secret: this.configService.get<string>('AUTH_JWT_REFRESH_SECRET'),
    });
    if (!(tokenPayload && tokenPayload.username)) {
      throw new ForbiddenException('Access Denied');
    }
    const user = await this.userService.getUserByUsername(tokenPayload.username);
    if (user && user.refreshToken) {
      refreshTokenMatches = await argon2.verify(user.refreshToken, refreshToken);
    }
    if (!refreshTokenMatches) {
      throw new ForbiddenException('Access Denied');
    }
    const tokens = await this.getTokens(user.id, user.username);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  async logout(username: string) {
    const user = await this.userService.getUserByUsername(username);
    return this.userService.updateUser(user.id, { refreshToken: null });
  }
}
