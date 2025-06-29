import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Archetypes } from './archetypes.entity';
import { SpellBooks } from './spell-books.entity';

@Index('book_id', ['id'], { unique: true })
@Entity('books', { schema: 'public' })
export class Books {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id: string;

  @Column('character', { name: 'name', length: 50 })
  name: string;

  @OneToMany(() => Archetypes, archetypes => archetypes.book)
  archetypes: Archetypes[];

  @OneToMany(() => SpellBooks, spellBooks => spellBooks.book)
  spellBooks: SpellBooks[];
}
