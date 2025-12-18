import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumberString,
  IsString,
} from 'class-validator';
import { DndClasses } from '../entities/dnd_classes.entity';
import { Schools } from '../entities/schools.entity';

export class SpellDto {
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
  school!: Schools;
  @ApiProperty()
  @IsNotEmpty()
  dndClasses!: DndClasses[];
}
