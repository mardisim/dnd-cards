ALTER TABLE archetypes ALTER COLUMN name TYPE text USING name::text;

ALTER TABLE archetypes ALTER COLUMN title TYPE text USING title::text;

ALTER TABLE spells ALTER COLUMN name TYPE text USING name::text;

ALTER TABLE spells ALTER COLUMN range TYPE text USING range::text;

ALTER TABLE spells ALTER COLUMN components TYPE text USING components::text;

ALTER TABLE spells ALTER COLUMN material TYPE text USING material::text;

ALTER TABLE spells ALTER COLUMN action TYPE text USING action::text;

ALTER TABLE spells ALTER COLUMN duration TYPE text USING duration::text;

ALTER TABLE spells ALTER COLUMN casting_time TYPE text USING casting_time::text;

ALTER TABLE dnd_classes ALTER COLUMN name TYPE text USING name::text;

ALTER TABLE schools
ADD COLUMN description text,
ADD COLUMN icon_url text;

-- Rename Constraints
ALTER TABLE archetypes RENAME CONSTRAINT archetype_id TO pk_archetypes;
ALTER TABLE books RENAME CONSTRAINT book_id TO pk_books;
ALTER TABLE spell_books RENAME CONSTRAINT book_id TO pk_books;
ALTER TABLE characters RENAME CONSTRAINT character_id TO pk_characters;
ALTER TABLE character_spells RENAME CONSTRAINT character_id TO pk_characters;
ALTER TABLE characters RENAME CONSTRAINT character_spell_id TO pk_character_spells;
ALTER TABLE character_spells RENAME CONSTRAINT character_spell_id TO pk_character_spells;
ALTER TABLE dnd_classes RENAME CONSTRAINT class_id TO pk_dnd_classes;
ALTER TABLE dnd_class_spells RENAME CONSTRAINT class_id TO pk_dnd_classes;
ALTER TABLE dnd_classes RENAME CONSTRAINT class_spell_id TO pk_dnd_class_spells;
ALTER TABLE dnd_class_spells RENAME CONSTRAINT class_spell_id TO pk_dnd_class_spells;
ALTER TABLE schools RENAME CONSTRAINT school_id TO pk_schools;
ALTER TABLE character_spells RENAME CONSTRAINT spells_pkey TO pk_spells;
ALTER TABLE dnd_class_spells RENAME CONSTRAINT spells_pkey TO pk_spells;
ALTER TABLE spells RENAME CONSTRAINT spells_pkey TO pk_spells;
ALTER TABLE users RENAME CONSTRAINT user_id TO pk_users;