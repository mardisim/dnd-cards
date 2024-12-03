import { IUserModel } from '@dnd-cards/shared/interfaces';
import { IsEmail, IsString } from 'class-validator';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User implements IUserModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  username!: string;

  @Column({ length: 100 })
  password!: string;

  @Column({ length: 100, nullable: true, name: 'first_name' })
  firstName!: string;

  @Column({ length: 100, nullable: true, name: 'last_name' })
  lastName!: string;

  @Column({ length: 250, unique: true })
  @IsEmail()
  email!: string;

  @Column({ length: 250, name: 'refresh_token' })
  @IsString()
  refreshToken!: string | null;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @Column({ enum: ['Admin', 'User', 'Guest'], default: 'Guest' })
  role!: string;

  constructor(partialUser: Partial<User>) {
    Object.assign(this, partialUser);
  }
}
