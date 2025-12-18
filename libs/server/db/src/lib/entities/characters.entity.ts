import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Archetypes } from './archetypes.entity';
import { DndClasses } from './dnd_classes.entity';
import { Spells } from './spells.entity';
import { Users } from './users.entity';

@Index('charactersId_pkey', ['id'], { unique: true })
@Entity('characters', { schema: 'public' })
export class Characters {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character varying', { name: 'name' })
  name!: string;

  @Column('timestamp without time zone', {
    name: 'createdAt',
    default: () => 'now()',
  })
  createdAt!: Date;

  @ManyToOne(() => Archetypes, (archetypes) => archetypes.characters)
  @JoinColumn([{ name: 'archetypesId', referencedColumnName: 'id' }])
  archetypes!: Archetypes;

  @ManyToOne(() => DndClasses, (dndClasses) => dndClasses.characters, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'dndClassesId', referencedColumnName: 'id' }])
  dndClasses!: DndClasses;

  @ManyToOne(() => Users, (users) => users.characters, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'usersId', referencedColumnName: 'id' }])
  users!: Users;

  @ManyToMany(() => Spells, (spells) => spells.characters)
  @JoinTable({
    name: 'characters_spells',
    joinColumns: [{ name: 'charactersId', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'spellsId', referencedColumnName: 'id' }],
    schema: 'public',
  })
  spells!: Spells[];
}
