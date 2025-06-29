import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Characters } from './characters.entity';

@Index('user_id', ['id'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'gen_random_uuid()',
  })
  id: string;

  @Column('character', { name: 'username', length: 128 })
  username: string;

  @Column('character', { name: 'password', length: 128 })
  password: string;

  @Column('character varying', {
    name: 'first_name',
    nullable: true,
    length: 255,
  })
  firstName: string | null;

  @Column('character varying', {
    name: 'last_name',
    nullable: true,
    length: 255,
  })
  lastName: string | null;

  @Column('character', { name: 'email', length: 320 })
  email: string;

  @Column('date', { name: 'updated_at', nullable: true })
  updatedAt: string | null;

  @Column('date', {
    name: 'created_at',
    nullable: true,
    default: () => 'now()',
  })
  createdAt: string | null;

  @Column('character', { name: 'refresh_token', nullable: true, length: 512 })
  refreshToken: string | null;

  @OneToMany(() => Characters, characters => characters.user)
  characters: Characters[];
}
