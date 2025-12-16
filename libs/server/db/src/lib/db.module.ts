import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archetype } from './entities/archetype.entity';
import { Book } from './entities/book.entity';
import { Character } from './entities/character.entity';
import { DndClass } from './entities/dndclass.entity';
import { DndClassSpell } from './entities/dndclassspells.entity';
import { School } from './entities/school.entity';
import { Spell } from './entities/spell.entity';
import { SpellBook } from './entities/spellbook.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST', 'localhost'),
        port: configService.get<number>('POSTGRES_PORT', 5432),
        username: configService.get('POSTGRES_DB_USERNAME', 'root'),
        password: configService.get('POSTGRES_DB_PASSWORD', 'root'),
        database: configService.get('POSTGRES_NAME', 'dnd_cards'),
        entities: [Archetype, Book, Character, DndClass, DndClassSpell, School, SpellBook, Spell, User],
      }),
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DbModule {}
