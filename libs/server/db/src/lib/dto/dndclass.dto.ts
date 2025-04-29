import { IDndClassModel } from '@interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Spell } from '../entities/spell.entity';

export class DndClassDto implements IDndClassModel {
  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  id!: number;

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
