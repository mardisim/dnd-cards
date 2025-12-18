import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Books } from './books.entity';
import { Characters } from './characters.entity';
import { DndClasses } from './dnd_classes.entity';

@Index('archetypes_pkey', ['id'], { unique: true })
@Entity('archetypes', { schema: 'public' })
export class Archetypes {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('text', { name: 'name' })
  name!: string;

  @Column('text', { name: 'title' })
  title!: string;

  @Column('integer', { name: 'level' })
  level!: number;

  @ManyToOne(() => Books, (books) => books.archetypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'booksId', referencedColumnName: 'id' }])
  books!: Books;

  @ManyToOne(() => DndClasses, (dndClasses) => dndClasses.archetypes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'dndClassesId', referencedColumnName: 'id' }])
  dndClasses!: DndClasses;

  @OneToMany(() => Characters, (characters) => characters.archetypes)
  characters!: Characters[];
}
