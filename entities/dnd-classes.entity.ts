import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Archetypes } from './archetypes.entity';
import { Characters } from './characters.entity';
import { DndClassSpells } from './dnd-class-spells.entity';

@Index('class_id', ['id'], { unique: true })
@Entity('dnd_classes', { schema: 'public' })
export class DndClasses {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id: string;

  @Column('character', { name: 'name', length: 25 })
  name: string;

  @OneToMany(() => Archetypes, archetypes => archetypes.dndClass)
  archetypes: Archetypes[];

  @OneToMany(() => Characters, characters => characters.dndClass)
  characters: Characters[];

  @OneToMany(() => DndClassSpells, dndClassSpells => dndClassSpells.dndClass)
  dndClassSpells: DndClassSpells[];
}
