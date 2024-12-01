import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '@dnd-cards/server/core';
import { AuthModule } from '@dnd-cards/server/auth';
import { UserModule } from '@dnd-cards/server/user';
import { SpellModule } from '@dnd-cards/server/spell';
import { DbModule } from '@dnd-cards/server/db';
@Module({
  imports: [CoreModule, DbModule, AuthModule, UserModule, SpellModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
