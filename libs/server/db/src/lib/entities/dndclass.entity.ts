import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Archetype } from './archetype.entity';
import { Character } from './character.entity';
import { DndClassSpell } from './dndclassspells.entity';
import { Spell } from './spell.entity';

@Index('class_id', ['id'], { unique: true })
@Entity('dnd_classes', { schema: 'public' })
export class DndClass {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character', { name: 'name', length: 25 })
  name!: string;

  @OneToMany(() => Archetype, archetypes => archetypes.dndClass)
  archetypes!: Archetype[];

  @OneToMany(() => Character, characters => characters.dndClass)
  characters!: Character[];

  @OneToMany(() => DndClassSpell, dndClassSpells => dndClassSpells.spell)
  spells!: Spell[];
}
