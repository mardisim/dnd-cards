import { IDndClassModel, ISchoolModel, ISpellModel } from '@interfaces';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DndClass } from './dndclass.entity';
import { School } from './school.entity';

@Entity('spells')
export class Spell implements ISpellModel {
  @PrimaryGeneratedColumn()
  id!: string;
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
  school!: ISchoolModel;

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
  dndClasses!: IDndClassModel[];

  constructor(partialSpell: Partial<Spell>) {
    Object.assign(this, partialSpell);
  }
}
