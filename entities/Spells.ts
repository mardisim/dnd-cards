import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Characters } from "./Characters";
import { DndClassSpells } from "./DndClassSpells";
import { SpellBooks } from "./SpellBooks";
import { Schools } from "./Schools";

@Index("spells_pkey", ["id"], { unique: true })
@Entity("spells", { schema: "public" })
export class Spells {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character", { name: "name", length: 50 })
  name: string;

  @Column("character varying", { name: "description" })
  description: string;

  @Column("character varying", { name: "ingredients", nullable: true })
  ingredients: string | null;

  @Column("character", { name: "range", nullable: true, length: 50 })
  range: string | null;

  @Column("character", { name: "components", nullable: true, length: 50 })
  components: string | null;

  @Column("character", { name: "material", nullable: true, length: 50 })
  material: string | null;

  @Column("character", { name: "action", length: 25 })
  action: string;

  @Column("boolean", { name: "ritual" })
  ritual: boolean;

  @Column("character", { name: "duration", length: 50 })
  duration: string;

  @Column("boolean", { name: "concentration" })
  concentration: boolean;

  @Column("character", { name: "casting_time", nullable: true, length: 25 })
  castingTime: string | null;

  @Column("character varying", { name: "id_old", nullable: true })
  idOld: string | null;

  @Column("integer", { name: "level" })
  level: number;

  @ManyToMany(() => Characters, (characters) => characters.spells)
  characters: Characters[];

  @OneToMany(() => DndClassSpells, (dndClassSpells) => dndClassSpells.spell)
  dndClassSpells: DndClassSpells[];

  @OneToMany(() => SpellBooks, (spellBooks) => spellBooks.spell)
  spellBooks: SpellBooks[];

  @ManyToOne(() => Schools, (schools) => schools.spells, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "school_id", referencedColumnName: "id" }])
  school: Schools;
}
