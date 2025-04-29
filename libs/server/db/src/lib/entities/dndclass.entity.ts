import { IDndClassModel } from '@interfaces';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Spell } from './spell.entity';

@Entity('classes')
export class DndClass implements IDndClassModel {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @ManyToMany(() => Spell)
  @JoinTable({
    name: 'class_spells',
    joinColumn: {
      name: 'class_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'spell_id',
      referencedColumnName: 'id',
    },
  })
  spells!: Spell[];
}
