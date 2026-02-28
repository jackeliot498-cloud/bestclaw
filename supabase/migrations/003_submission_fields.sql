-- Extend submissions for richer intake
alter table submissions
  add column if not exists category text,
  add column if not exists pricing text,
  add column if not exists is_open_source boolean,
  add column if not exists is_local boolean,
  add column if not exists logo_url text,
  add column if not exists contact_email text;
