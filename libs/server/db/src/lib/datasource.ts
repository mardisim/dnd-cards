import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Archetypes } from './entities/archetypes.entity';
import { Books } from './entities/books.entity';
import { Characters } from './entities/characters.entity';
import { DndClasses } from './entities/dnd_classes.entity';
import { DndClassesSpells } from './entities/dnd_classes_spells.entity';
import { Schools } from './entities/schools.entity';
import { Spells } from './entities/spells.entity';
import { SpellsBooks } from './entities/spells_books.entity';
import { Users } from './entities/users.entity';
config();

const configService = new ConfigService();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get<string>('POSTGRES_HOST'),
  port: configService.get<number>('POSTGRES_PORT') || 5432,
  username: configService.get<string>('POSTGRES_DB_USERNAME'),
  password: configService.get<string>('POSTGRES_DB_PASSWORD'),
  database: configService.get<string>('POSTGRES_DB'),
  synchronize: false,
  entities: [
    Archetypes,
    Books,
    Characters,
    DndClasses,
    DndClassesSpells,
    Schools,
    Spells,
    SpellsBooks,
    Users,
  ],
  migrations: ['data/migrations/*-migration.ts'],
  migrationsRun: false,
  logging: true,
});

export default AppDataSource;
