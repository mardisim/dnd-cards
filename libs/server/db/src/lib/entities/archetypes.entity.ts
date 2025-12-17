import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Books } from './books.entity';
import { Characters } from './character.entity';
import { DndClasses } from './dndclasses.entity';

@Index('archetypes_pkey', ['id'], { unique: true })
@Entity('archetypes', { schema: 'public' })
export class Archetypes {
  @Column('uuid', {
    primary: true,
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character', { length: 50 })
  name!: string;

  @Column('character', { length: 50 })
  title!: string;

  @Column('integer')
  level!: number;

  @ManyToOne(() => Books, books => books.archetypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  books!: Books;

  @ManyToOne(() => DndClasses, dndClasses => dndClasses.archetypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  dndClasses!: DndClasses;

  @OneToMany(() => Characters, characters => characters.archetypes)
  characters!: Characters[];
}
