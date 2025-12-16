import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Book } from './book.entity';
import { Spell } from './spell.entity';

@Index('page_book_spell', ['bookId', 'page', 'spellId'], { unique: true })
@Entity('spell_books', { schema: 'public' })
export class SpellBook {
  @Column('integer', { primary: true, name: 'page' })
  page!: number;

  @Column('uuid', { primary: true, name: 'book_id' })
  bookId!: string;

  @Column('uuid', { primary: true, name: 'spell_id' })
  spellId!: string;

  @ManyToOne(() => Book, books => books.spellBooks)
  @JoinColumn([{ name: 'book_id', referencedColumnName: 'id' }])
  book!: Book;

  @ManyToOne(() => Spell, spells => spells.spellBooks)
  @JoinColumn([{ name: 'spell_id', referencedColumnName: 'id' }])
  spell!: Spell;
}
