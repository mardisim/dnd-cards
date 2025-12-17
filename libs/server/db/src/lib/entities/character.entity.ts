import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Archetypes } from './archetypes.entity';
import { DndClasses } from './dndclasses.entity';
import { Spells } from './spells.entity';
import { Users } from './users.entity';

@Index('characters_spells_id_pkey', ['id'], { unique: true })
@Entity('characters', { schema: 'public' })
export class Characters {
  @Column('uuid', {
    primary: true,
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character varying', { name: 'name' })
  name!: string;

  @Column('timestamp without time zone', {
    default: () => 'now()',
  })
  createdAt!: Date;

  @ManyToMany(() => Spells)
  @JoinTable({
    name: 'characters_spells',
  })
  spells!: Spells[];

  @ManyToOne(() => Archetypes, archetypes => archetypes.characters)
  @JoinColumn()
  archetypes!: Archetypes;

  @ManyToOne(() => DndClasses, dndClasses => dndClasses.characters, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  dndClasses!: DndClasses;

  @ManyToOne(() => Users, users => users.characters, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  users!: Users;
}
