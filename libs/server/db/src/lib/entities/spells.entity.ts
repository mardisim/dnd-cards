import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Books } from './books.entity';
import { Characters } from './character.entity';
import { DndClassesSpells } from './dndclassesspells.entity';
import { Schools } from './schools.entity';
import { SpellsBooks } from './spellsbooks.entity';

@Index('spells_pkey', ['id'], { unique: true })
@Entity('spells', { schema: 'public' })
export class Spells {
  @Column('uuid', {
    primary: true,
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character', { length: 50 })
  name!: string;

  @Column('character varying')
  description!: string;

  @Column('character varying', { nullable: true })
  ingredients!: string | null;

  @Column('character', { nullable: true, length: 50 })
  range!: string | null;

  @Column('character', { nullable: true, length: 50 })
  components!: string | null;

  @Column('character', { nullable: true, length: 50 })
  material!: string | null;

  @Column('character', { length: 25 })
  action!: string;

  @Column('boolean')
  ritual!: boolean;

  @Column('character', { length: 50 })
  duration!: string;

  @Column('boolean')
  concentration!: boolean;

  @Column('character', { nullable: true, length: 25 })
  castingTime!: string | null;

  @Column('integer')
  level!: number;

  @ManyToMany(() => Characters)
  @JoinTable()
  characters!: Characters[];

  @OneToMany(() => DndClassesSpells, dndClassSpells => dndClassSpells.spells)
  dndClassesSpells!: DndClassesSpells[];

  @OneToMany(() => Books, Books => Books.id)
  spellsBooks!: SpellsBooks[];

  @ManyToOne(() => Schools, schools => schools.spells, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  schools!: Schools;
}
