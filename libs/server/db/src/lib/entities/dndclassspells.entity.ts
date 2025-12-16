import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { DndClass } from './dndclass.entity';
import { Spell } from './spell.entity';

@Index('class_spell_id', ['dndClassId', 'spellId'], { unique: true })
@Entity('dnd_class_spells', { schema: 'public' })
export class DndClassSpell {
  @Column('uuid', { primary: true, name: 'dnd_class_id' })
  dndClassId!: string;

  @Column('uuid', { primary: true, name: 'spell_id' })
  spellId!: string;

  @Column('integer', { name: 'level', nullable: true })
  level!: number | null;

  @ManyToOne(() => DndClass, dndClasses => dndClasses.spells, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'dnd_class_id', referencedColumnName: 'id' }])
  dndClass!: DndClass;

  @ManyToOne(() => Spell, spells => spells.dndClassSpells, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'spell_id', referencedColumnName: 'id' }])
  spell!: Spell;
}
