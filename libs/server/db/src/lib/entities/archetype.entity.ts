import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Book } from './book.entity';
import { Character } from './character.entity';
import { DndClass } from './dndclass.entity';

@Index('archetype_id', ['id'], { unique: true })
@Entity('archetypes', { schema: 'public' })
export class Archetype {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character', { name: 'name', length: 50 })
  name!: string;

  @Column('character', { name: 'title', length: 50 })
  title!: string;

  @Column('integer', { name: 'level' })
  level!: number;

  @ManyToOne(() => Book, books => books.archetypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'book_id', referencedColumnName: 'id' }])
  book!: Book;

  @ManyToOne(() => DndClass, dndClasses => dndClasses.archetypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'dnd_class_id', referencedColumnName: 'id' }])
  dndClass!: DndClass;

  @OneToMany(() => Character, characters => characters.archetypes)
  characters!: Character[];
}
