import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Characters } from './characters.entity';
import { DndClassesSpells } from './dnd_classes_spells.entity';
import { Schools } from './schools.entity';
import { SpellsBooks } from './spells_books.entity';

@Index('spells_pkey', ['id'], { unique: true })
@Entity('spells', { schema: 'public' })
export class Spells {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('text', { name: 'name' })
  name!: string;

  @Column('character varying', { name: 'description' })
  description!: string;

  @Column('character varying', { name: 'ingredients', nullable: true })
  ingredients!: string | null;

  @Column('text', { name: 'range', nullable: true })
  range!: string | null;

  @Column('text', { name: 'components', nullable: true })
  components!: string | null;

  @Column('text', { name: 'material', nullable: true })
  material!: string | null;

  @Column('text', { name: 'action' })
  action!: string;

  @Column('boolean', { name: 'ritual' })
  ritual!: boolean;

  @Column('text', { name: 'duration' })
  duration!: string;

  @Column('boolean', { name: 'concentration' })
  concentration!: boolean;

  @Column('text', { name: 'castingTime', nullable: true })
  castingTime!: string | null;

  @Column('integer', { name: 'level' })
  level!: number;

  @ManyToMany(() => Characters, (characters) => characters.spells)
  characters!: Characters[];

  @OneToMany(
    () => DndClassesSpells,
    (dndClassesSpells) => dndClassesSpells.spells,
  )
  dndClassesSpells!: DndClassesSpells[];

  @ManyToOne(() => Schools, (schools) => schools.spells, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'schoolsId', referencedColumnName: 'id' }])
  schools!: Schools;

  @OneToMany(() => SpellsBooks, (spellsBooks) => spellsBooks.spells)
  spellsBooks!: SpellsBooks[];
}
