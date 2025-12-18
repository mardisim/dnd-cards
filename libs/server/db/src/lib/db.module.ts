import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archetypes } from './entities/archetypes.entity';
import { Books } from './entities/books.entity';
import { Characters } from './entities/characters.entity';
import { DndClasses } from './entities/dnd_classes.entity';
import { DndClassesSpells } from './entities/dnd_classes_spells.entity';
import { Schools } from './entities/schools.entity';
import { Spells } from './entities/spells.entity';
import { SpellsBooks } from './entities/spells_books.entity';
import { Users } from './entities/users.entity';

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
        entities: [
          Archetypes,
          Books,
          Characters,
          DndClasses,
          DndClassesSpells,
          Schools,
          SpellsBooks,
          Spells,
          Users,
        ],
      }),
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DbModule {}
