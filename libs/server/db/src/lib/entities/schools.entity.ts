import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Spells } from './spells.entity';

@Index('schoolsId_pkey', ['id'], { unique: true })
@Entity('schools', { schema: 'public' })
export class Schools {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character varying', { name: 'name' })
  name!: string;

  @OneToMany(() => Spells, (spells) => spells.schools)
  spells!: Spells[];
}
