import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Spell } from './entities/spell.entity';
import { School } from './entities/school.entity';
import { DndClass } from './entities/dndclass.entity';

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
        entities: [User, Spell, School, DndClass],
      }),
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DbModule {}
