import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Spell } from './spell.entity';

@Index('school_id', ['id'], { unique: true })
@Entity('schools', { schema: 'public' })
export class School {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character', { name: 'name', length: 25 })
  name!: string;

  @OneToMany(() => Spell, spells => spells.school)
  spells!: Spell[];
}
