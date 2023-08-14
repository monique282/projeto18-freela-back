--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: photos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.photos (
    id integer NOT NULL,
    idphotos integer NOT NULL,
    photos text NOT NULL
);


--
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.photos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.photos_id_seq OWNED BY public.photos.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name text NOT NULL,
    idseler text,
    category text NOT NULL,
    description text NOT NULL,
    photo text NOT NULL,
    price text NOT NULL,
    status boolean DEFAULT true NOT NULL
);


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    cpf text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: userslogged; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.userslogged (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    token text NOT NULL
);


--
-- Name: userslogged_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.userslogged_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: userslogged_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.userslogged_id_seq OWNED BY public.userslogged.id;


--
-- Name: photos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.photos ALTER COLUMN id SET DEFAULT nextval('public.photos_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: userslogged id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userslogged ALTER COLUMN id SET DEFAULT nextval('public.userslogged_id_seq'::regclass);


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products VALUES (1, 'livro 1', 'm1@m.com', 'affairs', 'uma romance picante', 'https://m.media-amazon.com/images/I/513gwxPsJgL._SY344_BO1,204,203,200_QL70_ML2_.jpg', '2400', true);
INSERT INTO public.products VALUES (2, 'livro 2', 'm1@m.com', 'adventure', 'uma romance picante', 'https://m.media-amazon.com/images/I/513gwxPsJgL._SY344_BO1,204,203,200_QL70_ML2_.jpg', '2400', true);
INSERT INTO public.products VALUES (3, 'livro 3', 'm2@m.com', 'affairs', 'uma romance picante', 'https://m.media-amazon.com/images/I/513gwxPsJgL._SY344_BO1,204,203,200_QL70_ML2_.jpg', '2400', true);
INSERT INTO public.products VALUES (4, 'monique', 'm1@m.com', 'adventure', 'quero terminar isso logo e por favor que de tudo certo', 'https://m.media-amazon.com/images/I/513gwxPsJgL._SY344_BO1,204,203,200_QL70_ML2_.jpg', '2400', true);
INSERT INTO public.products VALUES (5, 'monique', 'm1@m.com', 'adventure', 'quero terminar isso logo e por favor que de tudo certo', 'https://m.media-amazon.com/images/I/513gwxPsJgL._SY344_BO1,204,203,200_QL70_ML2_.jpg', '2400', true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'monique', 'm1@m.com', '12345678910', '32998696530', '$2b$04$rH3nvQog00oyRkfeZQkSeOjvjMRhQNNQdZU29YyteEHBx6Mfqcpka');
INSERT INTO public.users VALUES (2, 'monique', 'm2@m.com', '12345678902', '33333333333', '$2b$04$X3IljQiP8NtVDJWeC/6YN.SjdhP1cNzc9N5nRsW9vndoLRen9ygmm');
INSERT INTO public.users VALUES (3, 'monique', 'm3@m.com', '12345678901', '33333333333', '$2b$04$MykItzCsiPSsKkY5sZ/h7.naCHi4zV/nbIRMQHkEtik2LjIF8OM7K');


--
-- Data for Name: userslogged; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.userslogged VALUES (24, 'monique', 'm1@m.com', '2af5f33b-161c-41ae-9b4c-0b4447a25bbf');
INSERT INTO public.userslogged VALUES (46, 'monique', 'm1@m.com', '4b1b703e-0304-47ed-8f9e-8968c0a01655');
INSERT INTO public.userslogged VALUES (47, 'monique', 'm1@m.com', 'f12795fd-0a69-48ad-b75f-be3adeede7b0');
INSERT INTO public.userslogged VALUES (48, 'monique', 'm1@m.com', 'ef9b9405-45e9-47a2-a76a-ff0efaf92a52');


--
-- Name: photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.photos_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: userslogged_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.userslogged_id_seq', 48, true);


--
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_cpf_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_cpf_key UNIQUE (cpf);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: userslogged userslogged_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userslogged
    ADD CONSTRAINT userslogged_pkey PRIMARY KEY (id);


--
-- Name: userslogged userslogged_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userslogged
    ADD CONSTRAINT userslogged_token_key UNIQUE (token);


--
-- Name: products products_idseler_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_idseler_fkey FOREIGN KEY (idseler) REFERENCES public.users(email);


--
-- Name: userslogged userslogged_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userslogged
    ADD CONSTRAINT userslogged_email_fkey FOREIGN KEY (email) REFERENCES public.users(email);


--
-- PostgreSQL database dump complete
--

