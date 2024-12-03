import { Module } from '@nestjs/common';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { AccessTokenGuard } from './guards/access-token.guard';

@Module({
  controllers: [],
  providers: [AccessTokenGuard, RefreshTokenGuard],
  exports: [],
})
export class SharedModule {}
