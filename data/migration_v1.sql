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