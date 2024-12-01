import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@dnd-cards/server/user';
import { IJWTPayloadUser, ISignedUser } from '@dnd-cards/shared/interfaces';

@Injectable()
export class AuthService {
  expiresIn = 3600;

  constructor(private userService: UserService, private readonly jwtService: JwtService) {}

  async createToken(username: string): Promise<ISignedUser> {
    const { firstName, lastName } = await this.userService.getUserByUsername(username);
    const payload: IJWTPayloadUser = { username, firstName, lastName };

    const token = this.jwtService.sign(payload);
    return {
      expiresIn: this.expiresIn,
      token,
      username,
      firstName,
      lastName,
    };
  }

  async validateUser(signedUser: IJWTPayloadUser): Promise<boolean> {
    if (signedUser && signedUser.username) {
      return Boolean(this.userService.getUserByUsername(signedUser.username));
    }
    return false;
  }
}
