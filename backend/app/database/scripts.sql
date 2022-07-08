-- Table: public.url
-- DROP TABLE public.url;
CREATE TABLE public.url (
    id integer NOT NULL DEFAULT nextval('url_id_seq'::regclass),
    original_url character varying COLLATE pg_catalog."default",
    shortened_url character varying COLLATE pg_catalog."default",
    created_at timestamp without time zone,
    CONSTRAINT url_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;
ALTER TABLE public.url OWNER to afivotmzixfvjw;
-- Index: ix_url_shortened_url
-- DROP INDEX public.ix_url_shortened_url;
CREATE UNIQUE INDEX ix_url_shortened_url ON public.url USING btree (
    shortened_url COLLATE pg_catalog."default" ASC NULLS LAST
) TABLESPACE pg_default;