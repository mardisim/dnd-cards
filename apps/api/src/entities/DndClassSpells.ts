import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { DndClasses } from './DndClasses';
import { Spells } from './Spells';

@Index('class_spell_id', ['dndClassId', 'spellId'], { unique: true })
@Entity('dnd_class_spells', { schema: 'public' })
export class DndClassSpells {
  @Column('uuid', { primary: true, name: 'dnd_class_id' })
  dndClassId: string;

  @Column('uuid', { primary: true, name: 'spell_id' })
  spellId: string;

  @Column('integer', { name: 'level', nullable: true })
  level: number | null;

  @ManyToOne(() => DndClasses, dndClasses => dndClasses.dndClassSpells, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'dnd_class_id', referencedColumnName: 'id' }])
  dndClass: DndClasses;

  @ManyToOne(() => Spells, spells => spells.dndClassSpells, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'spell_id', referencedColumnName: 'id' }])
  spell: Spells;
}
