import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Characters } from './character.entity';

@Index('usersId_pkey', ['id'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @Column('uuid', {
    primary: true,
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character varying')
  username!: string;

  @Column('character varying')
  password!: string;

  @Column('character varying', { nullable: true })
  firstName!: string | null;

  @Column('character varying', { nullable: true })
  lastName!: string | null;

  @Column('character varying')
  email!: string;

  @Column('date', { nullable: true })
  updatedAt!: string | null;

  @Column('date', {
    nullable: true,
    default: () => 'now()',
  })
  createdAt!: string | null;

  @Column('character varying', { nullable: true })
  refreshToken!: string | null;

  @Column('character varying', { nullable: true })
  role!: string | null;

  @OneToMany(() => Characters, characters => characters.users)
  characters!: Characters[];
}
