import { Module } from '@nestjs/common';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { AccessTokenGuard } from './guards/access-token.guard';
import { AuthGuard } from './guards/auth.guard';

@Module({
  controllers: [],
  providers: [AccessTokenGuard, RefreshTokenGuard, AuthGuard],
  exports: [],
})
export class SharedModule {}
