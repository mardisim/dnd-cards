import { Spell } from '@dnd-cards/server/db';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpellService } from './spell.service';
import { SpellController } from './spell.controller';
import { JwtService } from '@nestjs/jwt';
import { SpellMiddleware } from './middleware/spell.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Spell])],
  controllers: [SpellController],
  providers: [SpellService, JwtService],
})
export class SpellModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SpellMiddleware).forRoutes({
      path: 'spell/paged',
      method: RequestMethod.GET,
    });
  }
}
