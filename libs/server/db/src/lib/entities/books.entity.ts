import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Archetypes } from './archetypes.entity';
import { SpellsBooks } from './spellsbooks.entity';

@Index('books_pkey', ['id'], { unique: true })
@Entity('books', { schema: 'public' })
export class Books {
  @Column('uuid', {
    primary: true,
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character', { length: 50 })
  name!: string;

  @OneToMany(() => Archetypes, archetypes => archetypes.books)
  archetypes!: Archetypes[];

  @OneToMany(() => SpellsBooks, spellBooks => spellBooks.books)
  spellsBooks!: SpellsBooks[];
}
