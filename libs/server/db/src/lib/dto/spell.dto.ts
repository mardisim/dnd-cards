import { ISpellModel } from '@interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { DndClass } from '../entities/dndclass.entity';
import { School } from '../entities/school.entity';

export class SpellDto implements ISpellModel {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id!: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description!: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ingredients!: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  range!: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  components!: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  material!: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  action!: string;
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  ritual!: boolean;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  duration!: string;
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  concentration!: boolean;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  castingTime!: string;
  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  level!: number;
  @ApiProperty()
  @IsNotEmpty()
  school!: School;
  @ApiProperty()
  @IsNotEmpty()
  dndClasses!: DndClass[];
}
