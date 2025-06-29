import { IDndClassModel } from '@interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Spell } from '../entities/spell.entity';

export class DndClassDto implements IDndClassModel {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty()
  @IsNumber()
  level!: number;

  @ApiProperty()
  @IsNotEmpty()
  spells!: Spell[];
}
