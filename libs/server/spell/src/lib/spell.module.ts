import { Spell } from '@dnd-cards/server/db';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpellService } from './spell.service';
import { SpellController } from './spell.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Spell])],
  controllers: [SpellController],
  providers: [SpellService, JwtService],
})
export class SpellModule {}
