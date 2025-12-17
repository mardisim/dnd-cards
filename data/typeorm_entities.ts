import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Archetypes {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  title: string;
  @Column()
  level: number;
  @Column()
  dndClass_id: string;
  @Column()
  bookId: string;
}

@Entity()
export class Books {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
}

@Entity()
export class CharacterSpells {
  @Column()
  character_id: string;
  @Column()
  spell_id: string;
}

@Entity()
export class Characters {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  archetypes_id: string;
  @Column()
  dnd_class_id: string;
  @Column()
  user_id: string;
  @Column()
  created_at: Date;
}

@Entity()
export class DndClassSpells {
  @Column()
  dnd_class_id: string;
  @Column()
  spell_id: string;
  @Column()
  level: number;
}

@Entity()
export class DndClasses {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
}

@Entity()
export class Schools {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
}

@Entity()
export class SpellBooks {
  @Column()
  page: number;
  @Column()
  book_id: string;
  @Column()
  spell_id: string;
}

@Entity()
export class Spells {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  ingredients: string;
  @Column()
  range: string;
  @Column()
  components: string;
  @Column()
  material: string;
  @Column()
  action: string;
  @Column()
  ritual: boolean;
  @Column()
  duration: string;
  @Column()
  concentration: boolean;
  @Column()
  casting_time: string;
  @Column()
  school_id: string;
  @Column()
  id_old: string;
  @Column()
  level: number;
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  email: string;
  @Column()
  updated_at: Date;
  @Column()
  created_at: Date;
  @Column()
  refresh_token: string;
  @Column()
  role: string;
}
