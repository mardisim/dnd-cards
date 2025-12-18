import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Characters } from './characters.entity';

@Index('usersId_pkey', ['id'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column('character varying', { name: 'username' })
  username!: string;

  @Column('character varying', { name: 'password' })
  password!: string;

  @Column('character varying', { name: 'firstName', nullable: true })
  firstName!: string | null;

  @Column('character varying', { name: 'lastName', nullable: true })
  lastName!: string | null;

  @Column('character varying', { name: 'email' })
  email!: string;

  @Column('date', { name: 'updatedAt', nullable: true })
  updatedAt!: string | null;

  @Column('date', { name: 'createdAt', nullable: true, default: () => 'now()' })
  createdAt!: string | null;

  @Column('character varying', { name: 'refreshToken', nullable: true })
  refreshToken!: string | null;

  @Column('character varying', { name: 'role', nullable: true })
  role!: string | null;

  @OneToMany(() => Characters, (characters) => characters.users)
  characters!: Characters[];
}
