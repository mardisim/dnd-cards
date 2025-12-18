import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { DndClasses } from './dnd_classes.entity';
import { Spells } from './spells.entity';

@Index('dnd_classes_spells_id_pkey', ['dndClassesId', 'spellsId'], {
  unique: true,
})
@Entity('dnd_classes_spells', { schema: 'public' })
export class DndClassesSpells {
  @Column('uuid', { primary: true, name: 'dndClassesId' })
  dndClassesId!: string;

  @Column('uuid', { primary: true, name: 'spellsId' })
  spellsId!: string;

  @Column('integer', { name: 'level', nullable: true })
  level!: number | null;

  @ManyToOne(() => DndClasses, (dndClasses) => dndClasses.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  dndClasses!: DndClasses;

  @ManyToOne(() => Spells, (spells) => spells.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  spells!: Spells;
}
