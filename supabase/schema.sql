-- BestClaw Supabase schema (MVP)
-- Run in Supabase SQL editor

create extension if not exists pgcrypto;

-- Agents
create table if not exists agents (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  status text default 'draft' check (status in ('draft','published')),
  website text,
  pricing text check (pricing in ('free','paid','freemium','custom')),
  is_open_source boolean default false,
  is_local boolean default false,
  created_at timestamp with time zone default now()
);

create table if not exists agent_translations (
  id uuid primary key default gen_random_uuid(),
  agent_id uuid references agents(id) on delete cascade,
  locale text not null,
  name text not null,
  summary text,
  highlights jsonb,
  guide_steps jsonb,
  use_cases jsonb,
  unique(agent_id, locale)
);

-- Categories
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  created_at timestamp with time zone default now()
);

create table if not exists category_translations (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id) on delete cascade,
  locale text not null,
  name text not null,
  unique(category_id, locale)
);

create table if not exists agent_categories (
  agent_id uuid references agents(id) on delete cascade,
  category_id uuid references categories(id) on delete cascade,
  primary key(agent_id, category_id)
);

-- Guides
create table if not exists guides (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  status text default 'draft' check (status in ('draft','published')),
  created_at timestamp with time zone default now()
);

create table if not exists guide_translations (
  id uuid primary key default gen_random_uuid(),
  guide_id uuid references guides(id) on delete cascade,
  locale text not null,
  title text not null,
  summary text,
  content text,
  unique(guide_id, locale)
);

-- Submissions
create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  name text not null,
  website text,
  summary text,
  use_case text,
  status text default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamp with time zone default now()
);

-- Reviews
create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  agent_id uuid references agents(id) on delete cascade,
  rating int check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamp with time zone default now(),
  unique(user_id, agent_id)
);

-- RLS policies
alter table agents enable row level security;
create policy "public read agents" on agents for select using (status = 'published');

alter table agent_translations enable row level security;
create policy "public read agent translations" on agent_translations for select using (true);

alter table guides enable row level security;
create policy "public read guides" on guides for select using (status = 'published');

alter table guide_translations enable row level security;
create policy "public read guide translations" on guide_translations for select using (true);

alter table submissions enable row level security;
create policy "users can insert submissions" on submissions for insert with check (auth.uid() = user_id);
create policy "users can view own submissions" on submissions for select using (auth.uid() = user_id);

alter table reviews enable row level security;
create policy "users can insert reviews" on reviews for insert with check (auth.uid() = user_id);
create policy "public read reviews" on reviews for select using (true);
