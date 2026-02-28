-- Add logo fields for agents
alter table agents
  add column if not exists logo_url text,
  add column if not exists logo_path text,
  add column if not exists logo_source text;
