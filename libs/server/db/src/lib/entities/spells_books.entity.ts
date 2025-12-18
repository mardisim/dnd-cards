import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Books } from './books.entity';
import { Spells } from './spells.entity';

@Index('page_books_spells_pkey', ['booksId', 'page', 'spellsId'], {
  unique: true,
})
@Entity('spells_books', { schema: 'public' })
export class SpellsBooks {
  @Column('integer', { primary: true, name: 'page' })
  page!: number;

  @Column('uuid', { primary: true, name: 'booksId' })
  booksId!: string;

  @Column('uuid', { primary: true, name: 'spellsId' })
  spellsId!: string;

  @ManyToOne(() => Books, (books) => books.spellsBooks)
  @JoinColumn([{ name: 'booksId', referencedColumnName: 'id' }])
  books!: Books;

  @ManyToOne(() => Spells, (spells) => spells.spellsBooks)
  @JoinColumn([{ name: 'spellsId', referencedColumnName: 'id' }])
  spells!: Spells;
}
