import { CreateUserDto, LoginUserDto } from '@dnd-cards/server-db';
import { AccessTokenGuard, RefreshTokenGuard } from '@dnd-cards/server-shared';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

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
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(refreshToken);
  }

  @UseGuards(AccessTokenGuard)
  @Post('logout')
  async logoutUser(@Res() res: Response, @Body() username: string) {
    return res.status(HttpStatus.OK).json(await this.authService.logout(username));
  }
}
