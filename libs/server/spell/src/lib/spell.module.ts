import { Spell } from '@dnd-cards/server/db';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpellService } from './spell.service';
import { SpellController } from './spell.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Spell])],
  controllers: [SpellController],
  providers: [SpellService],
  exports: [SpellService],
})
export class SpellModule {}
