import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Books } from './Books';
import { Characters } from './Characters';
import { DndClasses } from './DndClasses';

@Index('archetype_id', ['id'], { unique: true })
@Entity('archetypes', { schema: 'public' })
export class Archetypes {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id: string;

  @Column('character', { name: 'name', length: 50 })
  name: string;

  @Column('character', { name: 'title', length: 50 })
  title: string;

  @Column('integer', { name: 'level' })
  level: number;

  @ManyToOne(() => Books, books => books.archetypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'book_id', referencedColumnName: 'id' }])
  book: Books;

  @ManyToOne(() => DndClasses, dndClasses => dndClasses.archetypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'dnd_class_id', referencedColumnName: 'id' }])
  dndClass: DndClasses;

  @OneToMany(() => Characters, characters => characters.archetypes)
  characters: Characters[];
}
