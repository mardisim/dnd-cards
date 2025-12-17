import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Books } from './books.entity';
import { Spells } from './spells.entity';

@Index('page_books_spells_pkey', ['booksId', 'page', 'spellsId'], { unique: true })
@Entity('spells_books', { schema: 'public' })
export class SpellsBooks {
  @Column('integer', { primary: true, name: 'page' })
  page!: number;

  @Column('uuid', { primary: true })
  booksId!: string;

  @Column('uuid', { primary: true })
  spellsId!: string;

  @ManyToOne(() => Books, books => books.spellsBooks)
  @JoinColumn()
  books!: Books;

  @ManyToOne(() => Spells, spells => spells.spellsBooks)
  @JoinColumn()
  spells!: Spells;
}
