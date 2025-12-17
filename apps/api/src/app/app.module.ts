import { AuthModule } from '@dnd-cards/server-auth';
import { CoreModule } from '@dnd-cards/server-core';
import { DbModule } from '@dnd-cards/server-db';
import { DnDClassesModule } from '@dnd-cards/server-dnd-class';
import { SpellModule } from '@dnd-cards/server-spell';
import { UserModule } from '@dnd-cards/server-user';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [CoreModule, DbModule, AuthModule, UserModule, SpellModule, DnDClassesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
