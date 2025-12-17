import { Spells } from '@dnd-cards/server-db';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpellMiddleware } from './middleware/spell.middleware';
import { SpellController } from './spell.controller';
import { SpellService } from './spell.service';

@Module({
  imports: [TypeOrmModule.forFeature([Spells])],
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
