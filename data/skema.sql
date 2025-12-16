--
-- PostgreSQL database dump
--

-- Dumped from database version 14.17
-- Dumped by pg_dump version 17.0

-- Started on 2025-07-06 23:59:24 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 17545)
-- Name: archetypes; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.archetypes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character(50) NOT NULL,
    title character(50) NOT NULL,
    level integer NOT NULL,
    dnd_class_id uuid NOT NULL,
    book_id uuid NOT NULL
);


ALTER TABLE public.archetypes OWNER TO root;

--
-- TOC entry 213 (class 1259 OID 17517)
-- Name: books; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.books (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character(50) NOT NULL
);


ALTER TABLE public.books OWNER TO root;

--
-- TOC entry 214 (class 1259 OID 17529)
-- Name: character_spells; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.character_spells (
    character_id uuid NOT NULL,
    spell_id uuid NOT NULL
);


ALTER TABLE public.character_spells OWNER TO root;

--
-- TOC entry 215 (class 1259 OID 17532)
-- Name: characters; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.characters (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying NOT NULL,
    archetypes_id uuid NOT NULL,
    dnd_class_id uuid NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.characters OWNER TO root;

--
-- TOC entry 216 (class 1259 OID 17541)
-- Name: dnd_class_spells; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.dnd_class_spells (
    dnd_class_id uuid NOT NULL,
    spell_id uuid NOT NULL,
    level integer
);


ALTER TABLE public.dnd_class_spells OWNER TO root;

--
-- TOC entry 210 (class 1259 OID 17481)
-- Name: dnd_classes; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.dnd_classes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character(25) NOT NULL
);


ALTER TABLE public.dnd_classes OWNER TO root;

--
-- TOC entry 211 (class 1259 OID 17487)
-- Name: schools; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.schools (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.schools OWNER TO root;

--
-- TOC entry 219 (class 1259 OID 17687)
-- Name: spell_books; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.spell_books (
    page integer NOT NULL,
    book_id uuid NOT NULL,
    spell_id uuid NOT NULL
);


ALTER TABLE public.spell_books OWNER TO root;

--
-- TOC entry 212 (class 1259 OID 17505)
-- Name: spells; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.spells (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character(50) NOT NULL,
    description character varying NOT NULL,
    ingredients character varying,
    range character(50),
    components character(50),
    material character(50),
    action character(25) NOT NULL,
    ritual boolean NOT NULL,
    duration character(50) NOT NULL,
    concentration boolean NOT NULL,
    casting_time character(25),
    school_id uuid NOT NULL,
    id_old character varying,
    level integer NOT NULL
);


ALTER TABLE public.spells OWNER TO root;

--
-- TOC entry 218 (class 1259 OID 17559)
-- Name: users; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    first_name character varying,
    last_name character varying,
    email character varying NOT NULL,
    updated_at date,
    created_at date DEFAULT now(),
    refresh_token character varying,
    role character varying
);


ALTER TABLE public.users OWNER TO root;

--
-- TOC entry 3293 (class 2606 OID 17619)
-- Name: archetypes archetype_id; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.archetypes
    ADD CONSTRAINT archetype_id PRIMARY KEY (id);


--
-- TOC entry 3285 (class 2606 OID 17554)
-- Name: books book_id; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT book_id PRIMARY KEY (id);


--
-- TOC entry 3289 (class 2606 OID 17558)
-- Name: characters character_id; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT character_id PRIMARY KEY (id);


--
-- TOC entry 3287 (class 2606 OID 17597)
-- Name: character_spells character_spell_id; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_spells
    ADD CONSTRAINT character_spell_id PRIMARY KEY (character_id, spell_id);


--
-- TOC entry 3279 (class 2606 OID 17573)
-- Name: dnd_classes class_id; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.dnd_classes
    ADD CONSTRAINT class_id PRIMARY KEY (id);


--
-- TOC entry 3291 (class 2606 OID 17575)
-- Name: dnd_class_spells class_spell_id; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.dnd_class_spells
    ADD CONSTRAINT class_spell_id PRIMARY KEY (dnd_class_id, spell_id);


--
-- TOC entry 3297 (class 2606 OID 17704)
-- Name: spell_books page_book_spell; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.spell_books
    ADD CONSTRAINT page_book_spell PRIMARY KEY (page, book_id, spell_id);


--
-- TOC entry 3281 (class 2606 OID 17571)
-- Name: schools school_id; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.schools
    ADD CONSTRAINT school_id PRIMARY KEY (id);


--
-- TOC entry 3283 (class 2606 OID 17569)
-- Name: spells spells_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.spells
    ADD CONSTRAINT spells_pkey PRIMARY KEY (id);


--
-- TOC entry 3295 (class 2606 OID 17567)
-- Name: users user_id; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_id PRIMARY KEY (id);


--
-- TOC entry 3301 (class 2606 OID 25842)
-- Name: characters archetypes_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT archetypes_id FOREIGN KEY (archetypes_id) REFERENCES public.archetypes(id) NOT VALID;


--
-- TOC entry 3306 (class 2606 OID 17613)
-- Name: archetypes book_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.archetypes
    ADD CONSTRAINT book_id FOREIGN KEY (book_id) REFERENCES public.books(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3308 (class 2606 OID 17690)
-- Name: spell_books book_spells_book_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.spell_books
    ADD CONSTRAINT book_spells_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(id);


--
-- TOC entry 3309 (class 2606 OID 17695)
-- Name: spell_books book_spells_spell_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.spell_books
    ADD CONSTRAINT book_spells_spell_id_fkey FOREIGN KEY (spell_id) REFERENCES public.spells(id);


--
-- TOC entry 3299 (class 2606 OID 17598)
-- Name: character_spells character_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_spells
    ADD CONSTRAINT character_id FOREIGN KEY (character_id) REFERENCES public.characters(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3304 (class 2606 OID 17576)
-- Name: dnd_class_spells dnd_class_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.dnd_class_spells
    ADD CONSTRAINT dnd_class_id FOREIGN KEY (dnd_class_id) REFERENCES public.dnd_classes(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3302 (class 2606 OID 17586)
-- Name: characters dnd_class_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT dnd_class_id FOREIGN KEY (dnd_class_id) REFERENCES public.dnd_classes(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3307 (class 2606 OID 17608)
-- Name: archetypes dnd_class_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.archetypes
    ADD CONSTRAINT dnd_class_id FOREIGN KEY (dnd_class_id) REFERENCES public.dnd_classes(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3298 (class 2606 OID 17631)
-- Name: spells school_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.spells
    ADD CONSTRAINT school_id FOREIGN KEY (school_id) REFERENCES public.schools(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3305 (class 2606 OID 17581)
-- Name: dnd_class_spells spell_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.dnd_class_spells
    ADD CONSTRAINT spell_id FOREIGN KEY (spell_id) REFERENCES public.spells(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3300 (class 2606 OID 17603)
-- Name: character_spells spell_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_spells
    ADD CONSTRAINT spell_id FOREIGN KEY (spell_id) REFERENCES public.spells(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3303 (class 2606 OID 17591)
-- Name: characters user_id; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2025-07-06 23:59:24 CEST

--
-- PostgreSQL database dump complete
--

