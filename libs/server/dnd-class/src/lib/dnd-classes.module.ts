import { DndClasses } from '@dnd-cards/server-db';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DnDClassesController } from './dnd-classes.controller';
import { DnDClassesService } from './dnd-classes.service';
import { DnDClassesMiddleware } from './middleware/dnd-class.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([DndClasses])],
  controllers: [DnDClassesController],
  providers: [DnDClassesService, JwtService],
})
export class DnDClassesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DnDClassesMiddleware).forRoutes({
      path: 'dnd-class/paged',
      method: RequestMethod.GET,
    });
  }
}
