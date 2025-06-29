import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Spells } from './spells.entity';

@Index('school_id', ['id'], { unique: true })
@Entity('schools', { schema: 'public' })
export class Schools {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id: string;

  @Column('character', { name: 'name', length: 25 })
  name: string;

  @OneToMany(() => Spells, spells => spells.school)
  spells: Spells[];
}
