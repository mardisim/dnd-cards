import { Body, Controller, HttpCode, HttpStatus, Logger, Post, Res } from '@nestjs/common';
import { LoginDto, RegisterDto } from '@dnd-cards/server/db';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { UserService } from '@dnd-cards/server/user';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async loginUser(@Res() res: Response, @Body() loginDto: LoginDto) {
    if (!(loginDto && loginDto.username && loginDto.password)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
    }

    const user = await this.userService.getUserByUsername(loginDto.username);

    if (user) {
      if (await UserService.compareHash(loginDto.password, user.password)) {
        return res.status(HttpStatus.OK).json(await this.authService.createToken(user.username));
      }
    }

    return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username or password wrong!' });
  }

  @Post('register')
  async registerUser(@Res() res: Response, @Body() registerDto: RegisterDto) {
    console.log('req:', registerDto);
    if (!(registerDto && registerDto.username && registerDto.password)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
    }

    let user;
    try {
      user = await this.userService.getUserByUsername(registerDto.username);
    } catch {
      Logger.log('Error in lookup user', 'AuthController');
    }

    if (user) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username already exists!' });
    } else {
      user = await this.userService.createUser(registerDto);
    }

    return res.status(HttpStatus.OK).json(await this.authService.createToken(user.username));
  }
}
