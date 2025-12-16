import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Spells } from "./Spells";
import { Archetypes } from "./Archetypes";
import { DndClasses } from "./DndClasses";
import { Users } from "./Users";

@Index("character_id", ["id"], { unique: true })
@Entity("characters", { schema: "public" })
export class Characters {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", { name: "name" })
  name: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @ManyToMany(() => Spells, (spells) => spells.characters)
  @JoinTable({
    name: "character_spells",
    joinColumns: [{ name: "character_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "spell_id", referencedColumnName: "id" }],
    schema: "public",
  })
  spells: Spells[];

  @ManyToOne(() => Archetypes, (archetypes) => archetypes.characters)
  @JoinColumn([{ name: "archetypes_id", referencedColumnName: "id" }])
  archetypes: Archetypes;

  @ManyToOne(() => DndClasses, (dndClasses) => dndClasses.characters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "dnd_class_id", referencedColumnName: "id" }])
  dndClass: DndClasses;

  @ManyToOne(() => Users, (users) => users.characters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
