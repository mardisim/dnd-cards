import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Archetypes } from './archetypes.entity';
import { Characters } from './characters.entity';
import { Spells } from './spells.entity';

@Index('dnd_classes_id_pkey', ['id'], { unique: true })
@Entity('dnd_classes', { schema: 'public' })
export class DndClasses {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('text', { name: 'name' })
  name!: string;

  @OneToMany(() => Archetypes, (archetypes) => archetypes.dndClasses)
  archetypes!: Archetypes[];

  @OneToMany(() => Characters, (characters) => characters.dndClasses)
  characters!: Characters[];

  @ManyToMany(() => Spells)
  @JoinTable({ name: 'dnd_classes_spells' })
  spells!: Spells[];
}
