import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { School } from './school.entity';
import { ISpellModel } from '@interfaces';
import { DndClass } from './dndclass.entity';

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

  @ManyToMany(() => DndClass)
  @JoinTable({
    name: 'class_spells',
    joinColumn: {
      name: 'spell_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'class_id',
      referencedColumnName: 'id',
    },
  })
  dndClasses!: DndClass[];

  constructor(partialSpell: Partial<Spell>) {
    Object.assign(this, partialSpell);
  }
}
