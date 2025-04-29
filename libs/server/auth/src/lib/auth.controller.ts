import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LoginUserDto, CreateUserDto } from '@dnd-cards/server-db';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { AccessTokenGuard } from '@dnd-cards/server-shared';
import { RefreshTokenGuard } from '@dnd-cards/server-shared';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async loginUser(@Res() res: Response, @Body() loginDto: LoginUserDto) {
    return res.status(HttpStatus.OK).json(await this.authService.loginUser(loginDto));
  }

  @Post('register')
  async registerUser(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    return res.status(HttpStatus.OK).json(await this.authService.registerUser(createUserDto));
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const userId = req.user['id'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @UseGuards(AccessTokenGuard)
  @Post('logout')
  async logoutUser(@Res() res: Response, @Body() username: string) {
    return res.status(HttpStatus.OK).json(await this.authService.logout(username));
  }
}
