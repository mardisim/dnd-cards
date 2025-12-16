import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Archetype } from './archetype.entity';
import { DndClass } from './dndclass.entity';
import { Spell } from './spell.entity';
import { User } from './user.entity';

@Index('character_id', ['id'], { unique: true })
@Entity('characters', { schema: 'public' })
export class Character {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character varying', { name: 'name' })
  name!: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt!: Date;

  @ManyToMany(() => Spell, spells => spells.characters)
  @JoinTable({
    name: 'character_spells',
    joinColumns: [{ name: 'character_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'spell_id', referencedColumnName: 'id' }],
    schema: 'public',
  })
  spells!: Spell[];

  @ManyToOne(() => Archetype, archetypes => archetypes.characters)
  @JoinColumn([{ name: 'archetypes_id', referencedColumnName: 'id' }])
  archetypes!: Archetype;

  @ManyToOne(() => DndClass, dndClasses => dndClasses.characters, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'dnd_class_id', referencedColumnName: 'id' }])
  dndClass!: DndClass;

  @ManyToOne(() => User, users => users.characters, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user!: User;
}
