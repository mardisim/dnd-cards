import { ISchoolModel } from '@interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('schools')
export class School implements ISchoolModel {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ length: 100 })
  name!: string;
}
