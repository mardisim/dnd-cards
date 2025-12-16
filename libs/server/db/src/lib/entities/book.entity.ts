import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Archetype } from './archetype.entity';
import { SpellBook } from './spellbook.entity';

@Index('book_id', ['id'], { unique: true })
@Entity('books', { schema: 'public' })
export class Book {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character', { name: 'name', length: 50 })
  name!: string;

  @OneToMany(() => Archetype, archetypes => archetypes.book)
  archetypes!: Archetype[];

  @OneToMany(() => SpellBook, spellBooks => spellBooks.book)
  spellBooks!: SpellBook[];
}
