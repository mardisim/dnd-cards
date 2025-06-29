import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Books } from './books.entity';
import { Spells } from './spells.entity';

@Index('page_book_spell', ['bookId', 'page', 'spellId'], { unique: true })
@Entity('spell_books', { schema: 'public' })
export class SpellBooks {
  @Column('integer', { primary: true, name: 'page' })
  page: number;

  @Column('uuid', { primary: true, name: 'book_id' })
  bookId: string;

  @Column('uuid', { primary: true, name: 'spell_id' })
  spellId: string;

  @ManyToOne(() => Books, books => books.spellBooks)
  @JoinColumn([{ name: 'book_id', referencedColumnName: 'id' }])
  book: Books;

  @ManyToOne(() => Spells, spells => spells.spellBooks)
  @JoinColumn([{ name: 'spell_id', referencedColumnName: 'id' }])
  spell: Spells;
}
