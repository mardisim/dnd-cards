import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { School } from './school.entity';
import { ISpellModel } from '@dnd-cards/shared/interfaces';

@Entity('spells')
export class Spell implements ISpellModel {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ length: 100 })
  name!: string;
  @Column()
  description!: string;
  @Column()
  ingredients!: string;
  @Column()
  range!: string;
  @Column()
  components!: string;
  @Column()
  material!: string;
  @Column()
  action!: string;
  @Column()
  ritual!: boolean;
  @Column()
  duration!: string;
  @Column()
  concentration!: boolean;
  @Column({ name: 'casting_time' })
  castingTime!: string;
  @Column()
  level!: number;

  @OneToOne(() => School)
  @JoinColumn({ name: 'school_id' })
  school!: School;

  constructor(partialSpell: Partial<Spell>) {
    Object.assign(this, partialSpell);
  }
}
