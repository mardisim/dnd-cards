import { Column, Entity, Index, OneToMany } from "typeorm";
import { Characters } from "./Characters";

@Index("user_id", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", { name: "username" })
  username: string;

  @Column("character varying", { name: "password" })
  password: string;

  @Column("character varying", { name: "first_name", nullable: true })
  firstName: string | null;

  @Column("character varying", { name: "last_name", nullable: true })
  lastName: string | null;

  @Column("character varying", { name: "email" })
  email: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", {
    name: "created_at",
    nullable: true,
    default: () => "now()",
  })
  createdAt: string | null;

  @Column("character varying", { name: "refresh_token", nullable: true })
  refreshToken: string | null;

  @Column("character varying", { name: "role", nullable: true })
  role: string | null;

  @OneToMany(() => Characters, (characters) => characters.user)
  characters: Characters[];
}
