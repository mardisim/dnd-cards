import { ISchoolModel } from '@dnd-cards/shared/interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SchoolDto implements ISchoolModel {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;
}
