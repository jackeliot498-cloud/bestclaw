-- Admin access for governance
create table if not exists admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users(id) on delete cascade,
  created_at timestamp with time zone default now()
);

alter table admins enable row level security;
create policy "admins can read admins" on admins for select using (auth.uid() = user_id);

-- Submissions admin policies
create policy "admins can read submissions" on submissions for select using (
  exists (select 1 from admins where admins.user_id = auth.uid())
);

create policy "admins can update submissions" on submissions for update using (
  exists (select 1 from admins where admins.user_id = auth.uid())
);

-- Guides admin policies
create policy "admins can update guides" on guides for update using (
  exists (select 1 from admins where admins.user_id = auth.uid())
);

create policy "admins can update guide translations" on guide_translations for update using (
  exists (select 1 from admins where admins.user_id = auth.uid())
);
