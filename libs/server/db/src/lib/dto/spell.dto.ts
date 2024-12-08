import { ApiProperty } from '@nestjs/swagger';
import { School } from '../entities/school.entity';
import { IsBoolean, IsNotEmpty, IsNumber, IsNumberString, IsString } from 'class-validator';
import { ISpellModel } from '@interfaces';
import { DndClass } from '../entities/dndclass.entity';

export class SpellDto implements ISpellModel {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id!: number;
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
