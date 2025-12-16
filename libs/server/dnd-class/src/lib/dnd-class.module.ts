import { DndClass } from '@dnd-cards/server-db';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DnDClassController } from './dnd-class.controller';
import { DnDClassService } from './dnd-class.service';
import { DnDClassMiddleware } from './middleware/dnd-class.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([DndClass])],
  controllers: [DnDClassController],
  providers: [DnDClassService, JwtService],
})
export class DnDClassModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DnDClassMiddleware).forRoutes({
      path: 'dnd-class/paged',
      method: RequestMethod.GET,
    });
  }
}
